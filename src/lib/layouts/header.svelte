<script lang="ts">
	import IconExternalUrl from '$lib/svg/iconExternalUrl.svelte';
	import LogoGithub from '$lib/svg/logoGithub.svelte';
	// import LogoDiscord from '../svg/logoDiscord.svelte';
	import LogoMcss from '../svg/logoMcss.svelte';
</script>

<header class="text-gray-400 bg-gray-900">
	<div class="container mx-auto flex flex-wrap p-5 flex-col lg:flex-row items-center">
		<a href="/" class="flex title-font font-medium items-center text-white mb-4 lg:mb-0">
			<LogoMcss class="w-10 h-10 pt-1" />
			<span class="ml-2 text-xl">MC Server Soft Community</span>
		</a>
		<nav class="lg:mr-auto lg:ml-4 lg:py-1 lg:pl-4 lg:border-l lg:border-gray-700 flex flex-wrap items-center text-base justify-center">
			<a href="/" class="mr-5 hover:text-white">Projects</a>
		</nav>
		<div class="flex flex-wrap justify-center">
			<a rel="noopener noreferrer" href="https://github.com/mcserversoft-community" class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mr-2 mt-4 lg:mt-0"><LogoGithub class="w-4 h-4" /></a>
			<a rel="noopener noreferrer" href="https://www.mcserversoft.com" target="_blank" class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 lg:mt-0"><IconExternalUrl class="w-4 h-4 mr-1" /> Visit the Mcss Project</a>
		</div>
	</div>
</header>
