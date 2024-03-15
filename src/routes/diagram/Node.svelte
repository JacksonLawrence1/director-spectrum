<script lang="ts">
	import { Button } from 'flowbite-svelte';

	export let size: 'sm' | 'md' | 'lg' = 'sm';
	export let end: boolean = false;
	export let id: number;

	export let changeDirector: (id: number) => void;
</script>

<div class="flex size-max items-center gap-2 pr-2">
	<Button
		class="rounded-full p-0 focus:ring-0"
		on:click={() => changeDirector(id)}
	>
		{#if size === 'sm'}
			<span class="dot size-[30px]"></span>
		{:else if size === 'md'}
			<span class="dot size-[50px]"></span>
		{:else}
			<span class="dot size-[75px]"></span>
		{/if}
	</Button>

	{#if !end}
		<div class="h-0.5 bg-gray-400 dark:bg-gray-800 sm:w-5 md:w-10 lg:w-20" />
	{/if}
</div>

<style>
	.dot {
		@apply rounded-full bg-gray-500 
        transition-all ease-in-out 
        hover:scale-125 hover:cursor-pointer
        hover:bg-gray-900 dark:bg-gray-400 dark:hover:bg-white;
	}
</style>
