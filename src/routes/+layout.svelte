<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<main class="min-h-screen w-screen bg-gray-950 flex flex-col">
	<!-- <Header /> -->
	{@render children()}
	<!-- <Footer /> -->
</main>
