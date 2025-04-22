<script lang="ts">
	import Search from 'lucide-svelte/icons/search';
	import Button from '$lib/components/internal/button/button.svelte';
	import * as AlertDialog from '$lib/components/internal/alert-dialog/index';
	import X from 'lucide-svelte/icons/x';
	import Input from '$lib/components/internal/input/input.svelte';
	import { Debounced } from 'runed';

	let openSearch = $state(false);

	let searchTerm = $state('');
	const debounced = new Debounced(() => searchTerm, 2000);

	//TODO: Implete a fulltext search using postgres fulltext search pvector or string matching? %nutz%
</script>

<Button onclick={() => (openSearch = true)} size="icon" variant="ghost" class="lg:hidden">
	<Search />
</Button>

<Button onclick={() => (openSearch = true)} size="sm" variant="ghost" class="hidden lg:flex">
	<Search />
	<span class="text-xs">Search Product</span>
</Button>

<AlertDialog.Root bind:open={openSearch}>
	<AlertDialog.Content class="max-w-4xl">
		<button onclick={() => (openSearch = false)} class="absolute right-0 top-0 p-2">
			<X class="size-4" />
		</button>

		<AlertDialog.Title>Search Product</AlertDialog.Title>

		<Input bind:value={searchTerm} type="search" placeholder="Search Product" />

		<!--Search Results-->
		<div class="">
			{debounced.current}
		</div>
	</AlertDialog.Content>
</AlertDialog.Root>
