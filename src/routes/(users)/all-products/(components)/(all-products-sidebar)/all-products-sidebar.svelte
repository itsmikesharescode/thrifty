<script lang="ts">
	import { ScrollArea } from '$lib/components/internal/scroll-area/index.js';
</script>

<div class="relative">
	<div class="sticky top-[6rem] grid rounded-lg border-2">
		<ScrollArea class="max-h-[calc(100dvh-12rem)] p-4 ">
			<div class="flex flex-col gap-2">
				{#each Array(90)}
					<a href="/" class="text-sm text-muted-foreground transition-all hover:underline">
						Brand name
					</a>
				{/each}
			</div>
		</ScrollArea>
	</div>
</div>
