<script lang="ts" module>
	import AlignJustify from 'lucide-svelte/icons/align-justify';
	import Button from '$lib/components/internal/button/button.svelte';
	import { NavigationMenu } from 'bits-ui';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import Lightbulb from 'lucide-svelte/icons/lightbulb';
	import MessageSquarePlus from 'lucide-svelte/icons/message-square-plus';
	import ProductSearch from '../toolbars/product-search/product-search.svelte';
	import * as Sheet from '$lib/components/internal/sheet/index.js';
	import * as Accordion from '$lib/components/internal/accordion/index.js';
	import ProductCart from '../toolbars/product-cart/product-cart.svelte';
	import * as Avatar from '$lib/components/internal/avatar/index';

	export const links = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'All Products',
			href: '/all-products'
		},
		{
			label: 'Have a Request?',
			href: '#',
			childLinks: [
				{
					label: 'Request Product',
					href: '/request-product',
					description: 'Have an idea for a product? We can help you make it a reality.',
					Icon: MessageSquarePlus
				},
				{
					label: 'Request Order',
					href: '/request-order',
					description: 'Want a custom product? We can help you get it.',
					Icon: Lightbulb
				}
			]
		}
	];
</script>

<script lang="ts">
	let openMenu = $state(false);
</script>

{#snippet Profile({ class: className }: { class: string })}
	<Button href="/profile" onclick={() => (openMenu = false)} size="sm" class={className}>
		<div class="flex items-center gap-2">
			<span>My Profile</span>
			<Avatar.Root class="size-8">
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
		</div>
	</Button>
{/snippet}

<nav class="sticky top-0 z-30 border-b-2 bg-background">
	<div class="container flex items-center justify-between p-4 md:px-8">
		<div class="w-fit">
			<span class="truncate text-base font-bold">Thrifty</span>
		</div>

		<NavigationMenu.Root class="absolute left-0 right-0 z-10 hidden  justify-center  md:flex">
			<NavigationMenu.List class="group flex list-none items-center justify-center p-1">
				{#each links as link}
					{#if link.childLinks}
						<NavigationMenu.Item value="getting-started">
							<NavigationMenu.Trigger
								class="data-[state=open]:shadow-mini focus:outline-hidden group inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white dark:hover:bg-muted dark:data-[state=open]:bg-muted"
							>
								{link.label}
								<ChevronDown
									class="relative top-[1px] ml-1 size-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
									aria-hidden="true"
								/>
							</NavigationMenu.Trigger>
							<NavigationMenu.Content
								class="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left absolute left-0 top-0 w-full sm:w-auto"
							>
								<ul
									class="grid gap-3 p-3 sm:w-[400px] sm:p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
								>
									{#each link.childLinks as childLink}
										<li>
											<NavigationMenu.Link
												class="outline-hidden block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground"
												href={childLink.href}
											>
												<div class="flex size-10 items-center justify-center rounded-lg bg-red-500">
													<childLink.Icon class="text-white" />
												</div>

												<div class="flex flex-col gap-1">
													<span class="text-sm font-medium">{childLink.label}</span>
													<span class="text-wrap text-sm text-gray-500"
														>{childLink.description}</span
													>
												</div>
											</NavigationMenu.Link>
										</li>
									{/each}
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
					{:else}
						<NavigationMenu.Item>
							<NavigationMenu.Link
								class="data-[state=open]:shadow-mini focus:outline-hidden group inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white dark:hover:bg-muted dark:data-[state=open]:bg-muted"
								href={link.href}
							>
								{link.label}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					{/if}

					<NavigationMenu.Indicator
						class="data-[state=hidden]:animate-fade-out data-[state=visible]:animate-fade-in top-full z-10 flex h-2.5 items-end justify-center overflow-hidden opacity-100 transition-[all,transform_250ms_ease] duration-200 data-[state=hidden]:opacity-0"
					>
						<div
							class="relative top-[70%] size-2.5 rotate-[45deg] rounded-tl-[2px] bg-border"
						></div>
					</NavigationMenu.Indicator>
					<div class="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
						<NavigationMenu.Viewport
							class="data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in relative mt-2.5 h-[var(--bits-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md border bg-background text-popover-foreground shadow-lg transition-[width,_height] duration-200 sm:w-[var(--bits-navigation-menu-viewport-width)] "
						/>
					</div>
				{/each}
			</NavigationMenu.List>
		</NavigationMenu.Root>

		<div class="z-20 flex w-fit items-center gap-2">
			<ProductSearch />
			<ProductCart />

			{@render Profile({ class: 'hidden md:flex' })}

			<Button onclick={() => (openMenu = true)} size="icon" variant="ghost" class="md:hidden">
				<AlignJustify />
			</Button>
		</div>
	</div>
</nav>

<!--Mobile Menu-->
<Sheet.Root bind:open={openMenu}>
	<Sheet.Content side="left" class="flex flex-col justify-between md:hidden">
		<Sheet.Header>
			{#each links as link}
				{#if link.childLinks}
					<Accordion.Root type="single" class="">
						<Accordion.Item value="item-1">
							<Accordion.Trigger class="p-0 pb-2">
								<span class="text-sm font-medium">{link.label}</span>
							</Accordion.Trigger>
							<Accordion.Content class="gap-4 border-l-[1px] border-gray-200 pl-2">
								{#each link.childLinks as childLink}
									<Sheet.Title class="mt-2 px-2 text-left">
										<a onclick={() => (openMenu = false)} href={childLink.href}>
											<span class="text-sm font-medium">{childLink.label}</span>
										</a>
									</Sheet.Title>
								{/each}
							</Accordion.Content>
						</Accordion.Item>
					</Accordion.Root>
				{:else}
					<Sheet.Title class="text-left">
						<a onclick={() => (openMenu = false)} href={link.href}>
							<span class="text-sm font-medium">{link.label}</span>
						</a>
					</Sheet.Title>
				{/if}
			{/each}
		</Sheet.Header>

		<Sheet.Footer>
			{@render Profile({ class: 'md:hidden' })}
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
