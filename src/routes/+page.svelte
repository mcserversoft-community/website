<script lang="ts" >
	import ProjectCard from '$lib/components/projectCard.svelte';
	import Hero from '$lib/layouts/hero.svelte';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Hero />

<section>
	<div class="container px-5 py-6 mx-auto">
		<div class="flex flex-wrap -m-4">
			{#each data.projects as { name, language, html_url } }
			<ProjectCard {name} description={language}  url={html_url} />
			{/each}
		</div>
	</div>
</section>