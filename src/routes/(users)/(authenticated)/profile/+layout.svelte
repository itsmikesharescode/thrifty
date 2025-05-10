<script lang="ts" module>
	import Button from '$lib/components/internal/button/button.svelte';
	import Logout from 'lucide-svelte/icons/log-out';
	import { page } from '$app/state';
</script>

<script lang="ts">
	const { children } = $props();

	const tabs = [
		{
			label: 'My Purchase',
			href: '/profile'
		},
		{
			label: 'My Orders',
			href: '/profile/my-orders'
		},
		{
			label: 'My Address',
			href: '/profile/my-address'
		}
	];

	const detectActiveUrl = $derived(page.url.pathname);
</script>

<!--Tabs here-->
<main class="container grid grid-cols-[auto_1fr] gap-5">
	<section class="sticky top-16 flex h-fit flex-col gap-2 py-5">
		{#each tabs as tab}
			<Button
				href={tab.href}
				variant="ghost"
				size="sm"
				class={[
					'w-full justify-start',
					{
						'bg-secondary text-primary': detectActiveUrl === tab.href
					}
				]}
			>
				{tab.label}
			</Button>
		{/each}

		<Button size="sm">
			<Logout class="size-4" />
			Log out
		</Button>
	</section>
	<section>
		{@render children()}
	</section>
</main>
