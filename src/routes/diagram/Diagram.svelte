<script lang="ts">
	import { Points, type Point } from '$lib/stores/spectrum';
	import DirectorCard from './DirectorCard.svelte';
	import NodeGroup from './NodeGroup.svelte';

	let point: Point = Points.get(0)!;
	let selected: number = 0;

	const changePoint = (pointId: number, componentId: number) => {
		// if id not found then use default 0 which is always set
		point = Points.get(pointId) || Points.get(0)!; 
		selected = componentId;
	};

</script>

<div class="flex justify-center py-4">
	<div class="flex flex-col items-center gap-16">
		<h1 class="text-5xl font-bold">{point.title}</h1>
		<div class="relative flex gap-4 justify-center items-center px-28 py-16 rounded-lg border-2 dark:border-gray-700 border-gray-200">
			<NodeGroup bind:selected {changePoint} />
			<p class="absolute text-right left-16">Art</p>
			<p class="absolute text-left right-4">Commerce</p>
		</div>
		<DirectorCard directors={point.directors} {changePoint} />
	</div>
</div>

<style lang="postcss">
	p {
		@apply text-lg;
	}
</style>
