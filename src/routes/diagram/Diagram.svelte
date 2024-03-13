<script>
	import Node from './Node.svelte';
</script>

<div class="flex justify-center py-8 text-center">
	<div class="flex flex-col items-center gap-20 rounded-lg p-8">
		<div class="flex flex-col items-center gap-10 px-2">
			<h1 class="text-2xl">Director Name</h1>
			<div class="h-48 w-96 rounded-lg border border-2 dark:bg-gray-800 p-4"> Description of Director here
			</div>
		</div>
		<div class="flex place-items-center">
			<Node size="md" text="Art" />
			<Node />
			<Node />
			<Node size="md" />
			<Node />
			<Node />
			<Node size="md" text="Blockbuster" end />
		</div>
	</div>
</div>
