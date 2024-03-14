<script lang="ts">
	import { Button } from 'flowbite-svelte';

	export let size: 'sm' | 'md' | 'lg' = 'sm';
	export let text: string = '';
	export let end: boolean = false;
	export let id: number;

	export let changeDirector: (id: number) => void;
</script>

<div class="flex items-center gap-2 pb-8 pr-2">
	<div class="flex flex-col items-center">
		{#if text !== ''}
			<p class="absolute -mt-10">{text}</p>
		{/if}
		<Button class="p-0 rounded-full focus:ring-0" on:click={() => changeDirector(id)}>
			{#if size === 'sm'}
				<span class="dot size-[30px]"></span>
			{:else if size === 'md'}
				<span class="dot size-[50px]"></span>
			{:else}
				<span class="dot size-[75px]"></span>
			{/if}
		</Button>
	</div>

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
