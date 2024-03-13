<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' = 'sm';
	export let number: string = '';
	export let text: string = '';
	export let end: boolean = false;
</script>

<div class="flex items-center gap-2 pr-2 pb-8">
	<div class="flex flex-col items-center">
		{#if number !== ''}
			<p class="absolute -mt-10 text-xl">{number}</p>
		{/if}
		{#if size === 'sm'}
			<span class="dot size-[29px]"></span>
		{:else if size === 'md'}
			<span class="dot size-[49px]"></span>
		{:else}
			<span class="dot size-[74px]"></span>
		{/if}
		{#if text !== ''}
			<p class="absolute mt-16">{text}</p>
		{/if}
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
