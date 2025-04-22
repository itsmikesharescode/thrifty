<script lang="ts">
	import ProductCard from '$lib/components/general/product-card/product-card.svelte';
	import AllProductsSidebar from './(components)/(all-products-sidebar)/all-products-sidebar.svelte';
	import MoveRight from 'lucide-svelte/icons/move-right';
	import Button from '$lib/components/internal/button/button.svelte';
</script>

<main class="container grid gap-6 p-4 md:gap-0 md:px-8 lg:grid-cols-[200px_1fr]">
	<AllProductsSidebar />

	<div class="flex flex-col gap-8 lg:p-4">
		{#each Array(30)}
			<div class="flex flex-col gap-4">
				<span class="text-lg font-semibold">Brand name</span>
				<div class="grid items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
					{#each Array(6)}
						<ProductCard
							productInfo={{
								name: 'Product name',
								price: 100,
								stock: 100
							}}
						/>
					{/each}
				</div>
				<Button href="/" variant="link" class="mx-auto max-w-fit">
					<MoveRight class="size-4" />
					View More
				</Button>
			</div>
		{/each}
	</div>
</main>
