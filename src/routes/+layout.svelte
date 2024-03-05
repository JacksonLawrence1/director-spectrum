<script>
	import '../app.css';
	import { DarkMode, Tooltip } from 'flowbite-svelte';
	import { GithubSolid, VideoCameraSolid } from 'flowbite-svelte-icons';

	import Button from '../components/Button.svelte';
	import IconButton from '../components/IconButton.svelte';
</script>

<div
	class="absolute flex w-full items-center justify-start border-b-2 px-8 py-2 dark:border-gray-600 dark:bg-gray-800"
>
	<div class="flex flex-row items-center gap-8">
		<Button name="Home" href="/">
			<div class="-mx-2 flex items-center gap-2">
				<VideoCameraSolid size="lg" />
				<h1 class="text-lg">The Director Spectrum</h1>
			</div>
		</Button>
		<div class="flex gap-2 text-lg">
			<a class="btn px-3 py-1" href="/">Home</a>
			<a class="btn px-3 py-1" href="/">About</a>
		</div>
	</div>
	<div class="ms-auto flex items-center">
		<IconButton tooltip name="GitHub">
			<GithubSolid size="lg" />
		</IconButton>
		<DarkMode size="lg" class="btn" />
		<Tooltip>Toggle Dark Mode</Tooltip>
	</div>
</div>

<slot />
