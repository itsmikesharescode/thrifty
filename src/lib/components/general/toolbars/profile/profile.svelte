<script lang="ts">
	import * as Avatar from '$lib/components/internal/avatar/index';
	import * as DropdownMenu from '$lib/components/internal/dropdown-menu/index';
	import { cn } from '$lib/utils';
	import type { ClassNameValue } from 'tailwind-merge';
	import { Badge } from '$lib/components/internal/badge/index.js';
	import Button from '$lib/components/internal/button/button.svelte';
	import LogOut from 'lucide-svelte/icons/log-out';

	interface Props {
		class?: ClassNameValue;
		contentClass?: ClassNameValue;
		isMobile?: boolean;
	}

	const { class: className, contentClass, isMobile }: Props = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={cn('', className)}>
		{#if isMobile}
			<Button>
				<Avatar.Root class="size-8">
					<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
				<div class="max-w-[150px] truncate">
					<span class="text-sm font-medium">John Doe SD</span>
				</div>
			</Button>
		{:else}
			<Avatar.Root class="size-8">
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
		{/if}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class={cn('', contentClass)}>
		<DropdownMenu.Group>
			<DropdownMenu.GroupHeading class="group relative flex flex-col items-center gap-2">
				<div class="size-20 rounded-full bg-secondary"></div>
				<Badge class="max-w-fit text-xs">Google Account</Badge>

				<div class="max-w-[200px] truncate">
					<span class="truncate text-xs text-muted-foreground"
						>Sampleemail12312312313@gmail.com</span
					>
				</div>
			</DropdownMenu.GroupHeading>
			<DropdownMenu.Separator />
			<a href="/authenticated/my-orders">
				<DropdownMenu.Item>My Orders</DropdownMenu.Item>
			</a>
			<a href="/authenticated/my-address">
				<DropdownMenu.Item>Delivery Addess</DropdownMenu.Item>
			</a>
			<DropdownMenu.Separator />
			<Button size="sm" class="w-full">
				<LogOut class="" />
				<span class=" text-xs">Log out to Thrifty</span>
			</Button>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
