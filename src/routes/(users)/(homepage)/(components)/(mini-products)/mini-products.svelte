<script lang="ts">
	import DynamicProduct from './(components)/dynamic-product.svelte';

	const testProducts = [
		{
			brand: 'Apple',
			products: [
				{
					name: 'iPhone 10',
					description: 'The latest iPhone with the latest features',
					photos: ['', '', '', '', '', '', '', '', '', ''],
					price: 1000,
					rating: 4.5,
					stock: 100
				},
				{
					name: 'iPhone 11',
					description: 'The latest iPhone with the latest features',
					photos: ['', '', '', '', '', '', '', '', '', ''],
					price: 1000,
					rating: 4.5,
					stock: 100
				},
				{
					name: 'iPhone 12',
					description: 'The latest iPhone with the latest features',
					photos: ['', '', '', '', '', '', '', '', '', ''],
					price: 1000,
					rating: 4.5,
					stock: 100
				}
			]
		},
		{
			brand: 'Samsung',
			products: [
				{
					name: 'Samsung Galaxy S20',
					description: 'The latest Samsung with the latest features',
					photos: ['', '', '', '', '', '', '', '', '', ''],
					price: 1000,
					rating: 4.5,
					stock: 100
				},
				{
					name: 'Samsung Galaxy S21',
					description: 'The latest Samsung with the latest features',
					photos: ['', '', '', '', '', '', '', '', '', ''],
					price: 1000,
					rating: 4.5,
					stock: 100
				},
				{
					name: 'Samsung Galaxy S22',
					description: 'The latest Samsung with the latest features',
					photos: ['', '', '', '', '', '', '', '', '', ''],
					price: 1000,
					rating: 4.5,
					stock: 100
				}
			]
		}
	];
</script>

<div class="flex flex-col gap-4 py-11">
	<span class="container text-2xl font-bold">Recent Products</span>

	{#each testProducts as item}
		<DynamicProduct brand={item.brand} products={item.products} />
	{/each}
</div>
