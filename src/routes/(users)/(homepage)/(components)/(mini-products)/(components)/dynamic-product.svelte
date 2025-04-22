<script lang="ts">
	import * as Carousel from '$lib/components/internal/carousel/index.js';
	import ProductCard from '$lib/components/general/product-card/product-card.svelte';
	import Button from '$lib/components/internal/button/button.svelte';
	import MoveRight from 'lucide-svelte/icons/move-right';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import type { CarouselAPI } from '$lib/components/internal/carousel/context';
	import { untrack } from 'svelte';

	interface Props {
		brand: string;
		products: {
			name: string;
			price: number;
			stock: number;
		}[];
	}

	const { brand, products }: Props = $props();

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

<div class="flex flex-col gap-2 border-b-2 py-5">
	<span id="#slughere" class="container text-xl font-semibold underline">{brand}</span>

	<Carousel.Root
		opts={{
			align: 'start'
		}}
		setApi={(api) => (emblaApi = api)}
		class="mx-auto w-full  px-1 py-4 pl-8 lg:container"
	>
		<Carousel.Content class="pr-10 lg:justify-center lg:pr-0">
			{#each products as product, i (i)}
				<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
					<div class="p-1">
						<ProductCard
							productInfo={{
								name: product.name,
								price: product.price,
								stock: product.stock
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

	<a
		href="/"
		class="container flex max-w-fit items-center gap-2 text-sm text-muted-foreground underline"
	>
		<MoveRight class="size-4" />
		See more about {brand}
	</a>
</div>
