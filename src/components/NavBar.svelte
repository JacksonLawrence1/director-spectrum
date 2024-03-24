<script lang="ts">
	import '../app.css';
	import { DarkMode, Tooltip } from 'flowbite-svelte';
	import { GithubSolid } from 'flowbite-svelte-icons';

	import IconButton from '../components/IconButton.svelte';
	import RouteLink from '../components/RouteLink.svelte';
</script>

<div
	class="absolute flex w-full items-center justify-start border-b-2 px-8 py-2 dark:bg-gray-800 dark:border-gray-700"
id="home">
	<div class="flex flex-row items-center gap-8">
		<div class="flex gap-2 text-lg">
			<RouteLink name="Home" href="/" />
			<RouteLink name="About" href="#about" />
		</div>
	</div>
	<div class="ms-auto flex items-center">
		<IconButton tooltip name="GitHub" href="https://github.com/JacksonLawrence1/director-spectrum">
			<GithubSolid size="lg" />
		</IconButton>
		<DarkMode size="lg" class="btn" />
		<Tooltip>Toggle Dark Mode</Tooltip>
	</div>
</div>
