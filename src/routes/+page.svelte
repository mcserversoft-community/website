<script lang="ts" >
	import ProjectCard from '$lib/components/projectCard.svelte';
	import Hero from '$lib/layouts/hero.svelte';

	export let data: any
	async function getProjects() {
		const res = await self.fetch('https://api.github.com/orgs/mcserversoft-community/repos');
		data = await res.json();
		return data;
	}
	
</script>

<Hero />

<section>
	<div class="container px-5 py-6 mx-auto">
		<div class="flex flex-wrap -m-4">
			{#await getProjects() then projects}
				{#each projects as { name, html_url, language }}
				<ProjectCard {name} description={language}  url={html_url} />
				{/each}
			{/await}
		</div>
	</div>
</section>