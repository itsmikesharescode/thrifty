<script lang="ts">
	import ExternalLink from 'lucide-svelte/icons/external-link';

	const devLinks = [
		{
			label: 'Github',
			href: 'https://github.com/itsmikesharescode'
		},
		{
			label: 'Facebook',
			href: 'https://www.facebook.com/mike.eviota'
		}
	];
</script>

<footer class="relative z-50 bg-secondary">
	<div class="container flex h-[300px] flex-col items-center justify-center">
		<div class="flex flex-col items-center justify-center gap-5">
			<span class="text-2xl font-bold">Thrifty</span>

			<div class="flex items-center gap-2">
				{#each Array(5)}
					<div class="size-7 rounded-full bg-primary"></div>
				{/each}
			</div>

			<span class="text-sm text-muted-foreground">© 2025 Thrifty, All rights reserved</span>
			<div class="flex flex-wrap items-center gap-2">
				{#each devLinks as link}
					<a
						href={link.href}
						target="_blank"
						class="flex items-center gap-1 text-sm text-muted-foreground transition-all hover:underline"
					>
						{link.label}
						<ExternalLink class="size-4" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
