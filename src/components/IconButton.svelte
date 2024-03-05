<script lang="ts">
	import Button from './Button.svelte';
	import '../app.css';

	export let name: string;
	export let tooltip: boolean = false;
</script>

<Button {...$$restProps} {name} {tooltip} class="btn aspect-square size-11">
	<slot />
</Button>
