<script>
	import ProjectCard from '$lib/components/projectCard.svelte';
	import projects from '$lib/data/projects.json';
</script>

<section>
	<div class="container px-5 py-6 mx-auto">
		<div class="flex flex-wrap -m-4">
			{#each projects as { name, language, url }}
				<ProjectCard {name} description={language} {url} />
			{/each}
		</div>
	</div>
</section>
