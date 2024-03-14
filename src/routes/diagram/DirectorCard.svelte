<script lang="ts">
	import { type Director } from '$lib/stores/directors';
	import { Button } from 'flowbite-svelte';
	import MoviePoster from './MoviePoster.svelte';

	export let changeDirector: (id: number) => void;
	export let director: Director;
</script>

{#if director.image}
	<div class="flex flex-col items-center gap-8">
		<div class="flex gap-8">
			<img
				src={director.image}
				alt={director.name}
				class="size-40 rounded-lg object-cover"
				style="object-position: 50% 20%;"
			/>
			<p class="w-96 p-2 text-left">{director.description}</p>
		</div>
		<p class="mt-4 text-xl font-semibold">Notable Filmography</p>
		<div class="flex gap-4">
			{#each director.movies ?? [] as movie}
				<MoviePoster {movie} />
			{/each}
		</div>
		{#if director.others}
			<!-- joins others array with commas and replacing the last comma with "and" -->
			<p class="mt-6 w-96">
				Some other directors who could also fit this category include {director.others
					.join(', ')
					.replace(/,([^,]*)$/, ' and$1')}.
			</p>
		{/if}
		<Button name="Reset" color="red" class="mt-8 w-min" on:click={() => changeDirector(0)}
			>Reset</Button
		>
	</div>
{:else}
	<p class="w-1/2 text-3xl">
		Click a circle see where some of the most popular directors lie on the spectrum.
	</p>
{/if}
