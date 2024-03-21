<script lang="ts">
	import { Button } from 'flowbite-svelte';

	export let size: 'sm' | 'md' | 'lg' = 'sm';
	export let end: boolean = false;
	export let dirId: number;
	export let selected: boolean = false;
	export let id: number;

	function getSize(): string {
		switch (size) {
			case 'md':
				return '50px';
			case 'lg':
				return '70px';
			default:
				return '30px';
		}
	}

	export let changePoint: (dirId: number, id: number) => void;
</script>

<div class="flex size-max items-center gap-2 pr-2">
	<Button class="group rounded-full p-0 focus:ring-0" on:click={() => changePoint(dirId, id)}>
		<span class="dot size-[{getSize()}] {selected ? 'ring-4' : ''}"></span>
	</Button>

	{#if !end}
		<div class="h-0.5 bg-gray-400 dark:bg-gray-800 sm:w-5 md:w-10 lg:w-20" />
	{/if}
</div>

<style lang="postcss">
	.dot {
		@apply rounded-full bg-gray-500 
        transition-all ease-in-out 
        hover:cursor-pointer hover:scale-125
        hover:bg-gray-900 dark:bg-gray-400 dark:hover:bg-white;
	}
</style>
