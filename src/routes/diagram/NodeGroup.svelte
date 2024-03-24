<script lang="ts">
	import Node from './Node.svelte';

	export let selected: number = 0;
	export let changePoint: (id: number) => void;

	type node = {
		id: number;
		size?: 'sm' | 'md' | 'lg';
		end?: boolean;
	};

	const nodes: node[] = [
		{ id: 1, size: 'md' },
		{ id: 2 },
		{ id: 3 },
		{ id: 4, size: 'lg' },
		{ id: 5 },
		{ id: 6 },
		{ id: 7, size: 'md', end: true }
	];
</script>

<div {...$$restProps} class="flex items-center justify-center" role="group">
	{#each nodes as node}
		<Node {...node} selected={selected === node.id} {changePoint} />
	{/each}
</div>
