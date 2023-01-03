<script>
	import projects from '$lib/data/projects.json';
	import ProjectCard from '$lib/components/projectCard.svelte';
</script>

<section>
	<div class="container px-5 py-6 mx-auto">
		<div class="flex flex-wrap -m-4">
			{#each projects as { name, language, version, url }, index}
				<ProjectCard {name} description={language} {version} {url} />
			{/each}
		</div>
	</div>
</section>
