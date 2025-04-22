<script lang="ts">
	import { ScrollArea } from '$lib/components/internal/scroll-area/index.js';

	//TODO: apply redirection to brand page or #scroll-to-brands
</script>

<div class="bg-secondary">
	<div class="flex flex-col gap-4 py-11">
		<span class="container px-4 text-2xl font-bold md:px-8">Brands</span>

		<ScrollArea
			class="mx-auto w-full  px-1 py-4 pl-4 lg:container md:pl-8"
			orientation="horizontal"
		>
			<div class="flex items-center gap-4">
				{#each Array(20)}
					<div class="size-24 rounded-2xl bg-primary"></div>
				{/each}
			</div>
		</ScrollArea>
	</div>
</div>
