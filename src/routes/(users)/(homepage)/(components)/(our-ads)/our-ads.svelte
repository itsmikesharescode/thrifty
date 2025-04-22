<script lang="ts">
	import PhotoSlider from '$lib/components/general/photo-slider/photo-slider.svelte';
	import Autoplay from 'embla-carousel-autoplay';
</script>

<div class="container px-4 py-11 md:px-8">
	<PhotoSlider
		classObj={{
			itemClass: 'md:basis-1/2 lg:basis-1/3',
			imageClass: 'h-[250px]'
		}}
		plugins={[Autoplay({ delay: 2000 })]}
	/>
</div>
