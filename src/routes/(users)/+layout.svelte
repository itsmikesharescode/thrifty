<script lang="ts">
	import '../../app.css';
	import UserNav from '$lib/components/general/nav/user-nav.svelte';
	import Footer from '$lib/components/general/footer/footer.svelte';
	let { children } = $props();
</script>

<UserNav />
{@render children()}
<Footer />
