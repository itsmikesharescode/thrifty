<script lang="ts">
	import * as Card from '$lib/components/internal/card/index.js';
	import Button from '$lib/components/internal/button/button.svelte';
	import ShoppingCart from 'lucide-svelte/icons/shopping-cart';
	import MoveRight from 'lucide-svelte/icons/move-right';

	interface Props {
		productInfo: {
			name: string;
			price: number;
			stock: number;
		};
	}

	let { productInfo }: Props = $props();
</script>

<Card.Root>
	<Card.Content class="flex w-full flex-col gap-2 p-4">
		<span class="text-sm text-muted-foreground">Stock: {productInfo.stock}</span>

		<a href="/" aria-label="Product details" class="h-[200px] bg-secondary"></a>

		<div class="flex flex-col">
			<span class="text-sm text-muted-foreground">{productInfo.name}</span>
			<span class="text-sm text-primary">₱ {productInfo.price}</span>
		</div>

		<div class="flex flex-wrap items-center justify-between gap-2">
			<Button>
				<MoveRight class="size-4" />
				Check out
			</Button>
			<Button class="relative">
				<ShoppingCart class="size-4" />
				Add to cart
			</Button>
		</div>
	</Card.Content>
</Card.Root>
