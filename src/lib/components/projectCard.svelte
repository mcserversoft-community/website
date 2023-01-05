<script lang="ts">
	export let name: string;
	export let description: string;
	// export let version: string;
	export let url: string;
</script>

<div class="p-4 md:w-1/3">
	<div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
		<div class="flex items-center mb-3">
			<h2 class="text-white text-lg title-font font-medium">{name}</h2>
		</div>
		<div class="flex-grow">
			<p class="leading-relaxed text-base">{description}</p>
			<!-- <p class="leading-relaxed text-base">v{version}</p> -->
			<p class="leading-relaxed text-base"><a href={url} target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
		</div>
	</div>
</div>
