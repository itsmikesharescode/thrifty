<script lang="ts">
	import * as Sheet from '$lib/components/internal/sheet/index.js';
	import Button from '$lib/components/internal/button/button.svelte';
	import ShoppingCart from 'lucide-svelte/icons/shopping-cart';
	import Minus from 'lucide-svelte/icons/minus';
	import Plus from 'lucide-svelte/icons/plus';
	import Input from '$lib/components/internal/input/input.svelte';
	import { ScrollArea } from '$lib/components/internal/scroll-area/index.js';
	import MoveRight from 'lucide-svelte/icons/move-right';
	import PhotoSlider from '$lib/components/general/photo-slider/photo-slider.svelte';
	import Autoplay from 'embla-carousel-autoplay';

	let openCart = $state(false);
</script>

<Button onclick={() => (openCart = true)} size="icon" class="relative" variant="ghost">
	<ShoppingCart />
	<span class="absolute right-0 top-0 size-4 rounded-full bg-red-500 text-xs text-white">4</span>
</Button>

<Sheet.Root bind:open={openCart}>
	<Sheet.Content class="grid p-0">
		<Sheet.Header class="p-6 pb-2">
			<Sheet.Title class="flex items-center gap-2">
				<ShoppingCart />
				Your Cart
			</Sheet.Title>
			<Sheet.Description>
				Products in cart will be deleted automatically after 90 days.
			</Sheet.Description>
		</Sheet.Header>
		<ScrollArea class="p-6 pb-2 pt-0">
			{#each Array(10) as _, i (i)}
				<div class="mt-5 flex flex-col gap-4 rounded-lg bg-secondary p-2 md:p-5">
					<div class="grid grid-cols-[auto_1fr] gap-4">
						<PhotoSlider
							classObj={{
								rootClass: 'w-[85px]'
							}}
							plugins={[Autoplay({ delay: 2000 })]}
						/>
						<div class="flex flex-col">
							<span>Product Name</span>
							<span class="line-clamp-2 text-xs text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad suscipit sit eum
								aliquid assumenda ea esse maxime quisquam saepe.
							</span>
							<span class="mt-1 text-sm font-bold">₱ 1,000</span>
						</div>
					</div>

					<div class="grid grid-cols-[auto_1fr_auto] items-center gap-2">
						<Button size="icon">
							<Minus />
						</Button>
						<Input type="number" class="w-full text-xs" placeholder="Enter quantity" />
						<Button size="icon">
							<Plus />
						</Button>
					</div>
				</div>
			{/each}
		</ScrollArea>

		<div class="flex items-center justify-between gap-2 p-6">
			<span class="text-sm font-bold">Total: ₱ 1,000</span>
			<Button>
				<MoveRight />
				Checkout
			</Button>
		</div>
	</Sheet.Content>
</Sheet.Root>
