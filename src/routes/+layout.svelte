<script>
	import '../app.pcss';
	import { DarkMode } from 'flowbite-svelte';
</script>

<div
	class="absolute flex w-screen flex-row items-center justify-between border-b-2 px-8 py-2 dark:border-gray-600 dark:bg-gray-800"
>
	<nav>
		<a href="/">Home</a>
	</nav>
	<DarkMode />
</div>

<slot />
