<script lang="ts">
	import { Directors } from '$lib/stores/directors';
	import { Button } from 'flowbite-svelte';

	export let changePoint: (id: number) => void;
	export let directors: number[];
	export let description: string;
</script>

<div class="flex flex-col items-center gap-12">
	<p class="w-screen px-8 text-left text-xl sm:text-center md:w-1/2">{description}</p>
	{#if directors.length > 0}
		<div class="flex w-screen flex-wrap justify-center gap-8 px-4">
			{#each directors
				.map((director) => Directors.get(director))
				.sort((a, b) => (a?.name || '').localeCompare(b?.name || '')) as dir}
				{#if dir}
					<div class="flex flex-col gap-2 rounded-lg bg-gray-200 p-4 dark:bg-gray-800">
						<img
							src={dir.image}
							alt={dir.name}
							class="h-32 w-32 self-center rounded-lg object-cover"
							style="object-position: 50% 20%"
						/>
						<div class="flex h-12 max-w-36 items-center justify-center self-center text-center">
							<p class="font-semibold">{dir.name}</p>
						</div>
						<div class="px-2 pl-4">
							{#each dir.movies.sort() as movie}
								<li class="w-32 text-sm">{movie}</li>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
		<Button name="Reset" color="red" class="mt-8 w-min" on:click={() => changePoint(0)}
			>Reset</Button
		>
	{/if}
</div>
