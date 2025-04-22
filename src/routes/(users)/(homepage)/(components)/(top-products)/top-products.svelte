<script lang="ts">
	import * as Carousel from '$lib/components/internal/carousel/index.js';
	import ProductCard from '$lib/components/general/product-card/product-card.svelte';
	import Button from '$lib/components/internal/button/button.svelte';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import type { CarouselAPI } from '$lib/components/internal/carousel/context';
	import { untrack } from 'svelte';

	let emblaApi = $state<CarouselAPI>();

	const scrollVars = $state({
		canNext: false,
		canPrev: false
	});

	$effect(() => {
		if (emblaApi) {
			untrack(() => {
				scrollVars.canNext = emblaApi?.canScrollNext() ?? false;
				scrollVars.canPrev = emblaApi?.canScrollPrev() ?? false;
			});
			emblaApi.on('select', () => {
				scrollVars.canNext = emblaApi?.canScrollNext() ?? false;
				scrollVars.canPrev = emblaApi?.canScrollPrev() ?? false;
			});
		}
	});
</script>

<div class="bg-gradient-to-r from-white to-muted-foreground backdrop-blur-sm">
	<div class=" flex flex-col gap-4 py-11">
		<span class="container px-4 text-2xl font-bold md:px-8">Top 5 Products</span>

		<Carousel.Root
			setApi={(api) => (emblaApi = api)}
			opts={{
				align: 'start'
			}}
			class="mx-auto w-full  px-1 py-4 pl-4 lg:container md:pl-8"
		>
			<Carousel.Content class="pr-10 lg:justify-center lg:pr-0">
				{#each Array(5) as _, i (i)}
					<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
						<div class="p-1">
							<ProductCard
								productInfo={{
									name: 'Product name sample',
									price: 1199,
									stock: 200
								}}
							/>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>

		<div class="container flex justify-end gap-2 px-4 md:px-8">
			<Button onclick={() => emblaApi?.scrollPrev()} disabled={!scrollVars.canPrev} size="icon">
				<ChevronLeft />
			</Button>
			<Button onclick={() => emblaApi?.scrollNext()} disabled={!scrollVars.canNext} size="icon">
				<ChevronRight />
			</Button>
		</div>
	</div>
</div>
