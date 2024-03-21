<script lang="ts">
	import { Directors } from '$lib/stores/directors';
	import { Button } from 'flowbite-svelte';

	export let changePoint: (dirId: number, id: number) => void;
	export let directors: number[];
</script>

{#if directors.length > 0}
	<div class="flex flex-col items-center gap-12">
		<p>Description here</p>
		<div class="flex gap-12">
			{#each directors.map((director) => Directors.get(director)).sort((a, b) => (a?.name || '').localeCompare(b?.name || '')) as dir}
				{#if dir}
					<div class="flex flex-col items-center gap-4">
						<img
							src={dir.image}
							alt={dir.name}
							class="h-32 w-32 rounded-lg object-cover"
							style="object-position: 50% 20%"
						/>
						<p class="max-w-32 text-lg text-center font-semibold">{dir.name}</p>
					</div>
				{/if}
			{/each}
		</div>
		<Button name="Reset" color="red" class="mt-8 w-min" on:click={() => changePoint(0, 0)}
			>Reset</Button
		>
	</div>
{:else}
	<p class="w-1/2 text-center text-3xl">
		Click a circle see where some of the most popular directors lie on the spectrum.
	</p>
{/if}
