<script lang="ts">
	import { page } from '$app/state';

	interface Props {
		data: any[];
	}

	const { data }: Props = $props();
</script>

<div class="min-h-[calc(100vh-20rem)] p-2">
	<!--Content here-->
	<div class="flex flex-col gap-2">
		{#each Array(5)}
			<div class="h-[200px] w-full rounded-lg bg-red-500"></div>
		{/each}
	</div>
</div>
