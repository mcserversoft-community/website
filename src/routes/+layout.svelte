<script>
	import Footer from '$lib/layouts/footer.svelte';
	import Header from '$lib/layouts/header.svelte';
	import '../app.css';
</script>

<div class="flex flex-col h-screen">
	<Header />
	<main class="flex-grow text-gray-400 bg-gray-900 ">
		<slot />
	</main>
	<Footer />
</div>
