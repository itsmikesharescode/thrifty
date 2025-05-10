<script lang="ts" module>
	import Navigation from '../(components)/(navigation)/navigation.svelte';
	import Content from '../(components)/(content)/content.svelte';
	import Pagination from '../(components)/(pagination)/pagination.svelte';
</script>

<div class="py-5">
	<Navigation />
	<Content data={[]} />
	<Pagination />
</div>
