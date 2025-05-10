<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/internal/button/button.svelte';

	const tabs = [
		{
			label: 'All',
			params: null
		},
		{
			label: 'To Ship',
			params: 'to-ship'
		},
		{
			label: 'To Receive',
			params: 'to-receive'
		},
		{
			label: 'Completed',
			params: 'completed'
		}
	];

	const detectActiveUrl = $derived(page.url.searchParams.get('filter'));
</script>

<div class="sticky top-20 flex items-center gap-2 bg-background">
	{#each tabs as tab}
		<Button
			href={tab.params ? `/profile?filter=${tab.params}` : '/profile'}
			variant="ghost"
			size="sm"
			class={[
				'w-full',
				{
					'bg-secondary text-primary': detectActiveUrl === tab.params
				}
			]}
		>
			{tab.label}
		</Button>
	{/each}
</div>
