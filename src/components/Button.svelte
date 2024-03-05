<script lang="ts">
	import { Button, Tooltip } from 'flowbite-svelte';
	import '../app.css';

	export let name: string;
	export let tooltip: boolean = false;
</script>

<Button {name} class="btn" target="_blank" rel="noreferrer" {...$$restProps}>
	<slot />
</Button>

{#if tooltip}
	<Tooltip>{name}</Tooltip>
{/if}
