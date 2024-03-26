<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import { Directors, type Director } from '$lib/stores/directors';
	import { Button } from 'flowbite-svelte';

	export let changePoint: (id: number) => void;
	export let directors: number[]; // director ids
	$: dirs = directors.map((director) => Directors.get(director)).filter(Boolean) as Director[];

	export let description: string;
</script>

<div class="flex flex-col items-center gap-12">
	{#key description}
		<p in:fade={{ duration: 1000 }} class="w-screen px-8 py-8 text-left text-xl sm:text-center md:w-1/2">
			{description}
		</p>
	{/key}
	{#if directors.length > 0}
		<div class="flex w-screen flex-wrap justify-center gap-8 px-4">
			{#each dirs.sort((a, b) => (a?.name || '').localeCompare(b?.name || '')) as dir, i (dir.name)}
				<div
					in:fly|global={{ y: -100, duration: 1000, delay: i * 300, easing: cubicInOut }}
					class="flex flex-col gap-2 rounded-lg bg-gray-200 p-4 dark:bg-gray-800"
				>
					<img
						src={dir.image}
						alt={dir.name}
						class="h-36 w-36 self-center rounded-lg object-cover"
						style="object-position: 50% 20%"
					/>
					<div class="flex h-12 max-w-40 items-center justify-center self-center text-center">
						<p class="font-semibold">{dir.name}</p>
					</div>
					<div class="px-2 pl-4">
						{#each dir.movies.sort() as movie}
							<li class="w-36 text-sm">{movie}</li>
						{/each}
					</div>
				</div>
			{/each}
		</div>
		{#key description}
			<div in:fade={{delay: 300 + directors.length * 300}}>
				<Button name="Reset" color="red" class="mt-8 w-min" on:click={() => changePoint(0)}
					>Reset</Button
				>
			</div>
		{/key}
	{/if}
</div>
