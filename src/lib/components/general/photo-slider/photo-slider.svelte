<script lang="ts">
	import * as Card from '$lib/components/internal/card/index.js';
	import * as Carousel from '$lib/components/internal/carousel/index.js';
	import type { ClassNameValue } from 'tailwind-merge';
	import { cn } from '$lib/utils';
	import type { EmblaOptionsType } from 'embla-carousel';
	import type { EmblaPluginType } from 'embla-carousel';

	interface Props {
		classObj?: {
			rootClass?: ClassNameValue;
			contentClass?: ClassNameValue;
			itemClass?: ClassNameValue;
			divClass?: ClassNameValue;
			imageClass?: ClassNameValue;
		};

		opts?: EmblaOptionsType;
		plugins?: EmblaPluginType[];
		images?: string[];
	}

	const { classObj, opts = { loop: true }, plugins, images }: Props = $props();

	//TODO: Implement image fetching from database using https://unpic.pics/img/svelte/
	//TODO: Fix event deligation blocking the root api hint carousel.conent
</script>

<div class="relative">
	<Carousel.Root {plugins} {...opts} class={cn('', classObj?.rootClass)}>
		<Carousel.Content class={cn('', classObj?.contentClass)}>
			{#each Array(5) as _, i (i)}
				<Carousel.Item class={cn('', classObj?.itemClass)}>
					<div class={cn('', classObj?.divClass)}>
						<!--Replace by unpic svelte-->
						<Card.Root class={cn('', classObj?.imageClass)}>
							<Card.Content class="flex size-20 items-center justify-center p-0">
								<span class="text-4xl font-semibold">{i + 1}</span>
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</div>
