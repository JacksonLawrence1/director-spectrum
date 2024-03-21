<script lang="ts">
	import Node from './Node.svelte';

    export let selected: number = 0;
    export let changePoint: (dirId: number, id: number) => void;

    type node = {
        id: number;
        dirId: number;
        size?: 'sm' | 'md' | 'lg';
        end?: boolean;
    };

    const nodes: node[] = [
        { id: 1, dirId: 4, size: 'md' },
        { id: 2, dirId: 6 },
        { id: 3, dirId: 5 },
        { id: 4, dirId: 3, size: 'lg' },
        { id: 5, dirId: 7 },
        { id: 6, dirId: 2 },
        { id: 7, dirId: 1, size: 'md', end: true }
    ];
</script>

<div {...$$restProps} class="flex items-center justify-center" role="group">
    {#each nodes as node}
        <Node
            {...node}
            selected={selected === node.id}
            {changePoint}
        />
    {/each}
</div>
