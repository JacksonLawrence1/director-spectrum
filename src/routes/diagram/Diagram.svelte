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

<div class="flex justify-center py-4 text-center">
	<div class="flex flex-col items-center gap-16 rounded-lg">
		<h1 class="text-3xl">{director.name}</h1>
		<div class="flex place-items-center">
			<Node id={4} {changeDirector} size="md" text="Art" />
			<Node id={5} {changeDirector} />
			<Node id={6} {changeDirector} />
			<Node id={2} {changeDirector} size="md" />
			<Node id={7} {changeDirector} />
			<Node id={3} {changeDirector} />
			<Node id={1} {changeDirector} size="md" text="Blockbuster" end />
		</div>
		<DirectorCard {director} {changeDirector} />
	</div>
</div>
