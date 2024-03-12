<script>
	import Node from './Node.svelte';
</script>

<div class="flex justify-center py-8 text-center">
	<div class="flex flex-col items-center gap-20 rounded-lg border-2 p-8 dark:border-gray-600">
		<div class="flex flex-col items-center gap-10">
			<h1 class="text-2xl">Director Name</h1>
			<div class="h-48 w-96 rounded-lg border-2 bg-gray-800 p-4 dark:border-gray-600">
				Description of Director here
			</div>
		</div>
		<div class="flex place-items-center gap-24">
			<Node size="md" text="Art" number="-4" />
			<Node />
			<Node />
			<Node />
			<Node size="md" number="0" />
			<Node />
			<Node />
			<Node />
			<Node size="md" text="Action" number="4" />
		</div>
	</div>
</div>
