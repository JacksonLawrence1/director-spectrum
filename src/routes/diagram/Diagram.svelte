<script lang="ts">
	import Node from './Node.svelte';
	import { directors, type Director } from '$lib/stores/directors';
	import DirectorCard from './DirectorCard.svelte';

	let director: Director = directors.get(0)!;

	const changeDirector = (id: number) => {
		// if id not found then use default 0 which is always set
		director = directors.get(id) || directors.get(0)!;
	};
</script>

<div class="flex justify-center py-4">
	<div class="flex flex-col items-center gap-16">
		<h1 class="text-5xl font-bold">{director.title}</h1>
		<div class="relative flex gap-4 justify-center items-center px-28 py-16 rounded-lg border-2 dark:border-gray-700 border-gray-200">
			<div class="flex items-center justify-center">
				<Node id={4} {changeDirector} size="md" />
				<Node id={5} {changeDirector} />
				<Node id={6} {changeDirector} />
				<Node id={3} {changeDirector} size="lg" />
				<Node id={7} {changeDirector} />
				<Node id={2} {changeDirector} />
				<Node id={1} {changeDirector} size="md" end />
			</div>
			<p class="absolute text-right left-16">Art</p>
			<p class="absolute text-left right-4">Commerce</p>
		</div>
		<DirectorCard {director} {changeDirector} />
	</div>
</div>

<style>
	p {
		@apply text-lg;
	}
</style>
