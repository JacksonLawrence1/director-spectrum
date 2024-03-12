<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	// scrolls down to section smoothly
	const scrollIntoView: MouseEventHandler<HTMLAnchorElement> = (e) => {
		document.querySelector(e.currentTarget.hash)?.scrollIntoView({
			behavior: 'smooth'
		});
	};

	export let href: string;
	export let name: string;
</script>

{#if href.startsWith('#')}
	<a class="btn px-3 py-1" {...$$restProps} {href} on:click|preventDefault={scrollIntoView}>{name}</a>
{:else}
	<a class="btn px-3 py-1" {...$$restProps} {href}>{name}</a>
{/if}
