<script lang="ts">
	import '../app.css';
	import { DarkMode, Tooltip } from 'flowbite-svelte';
	import { GithubSolid, VideoCameraSolid } from 'flowbite-svelte-icons';

	import Button from '../components/Button.svelte';
	import IconButton from '../components/IconButton.svelte';
	import RouteLink from '../components/RouteLink.svelte';
</script>

<div
	class="absolute flex w-full items-center justify-start border border-b-2 px-8 py-2 dark:bg-gray-800"
>
	<div class="flex flex-row items-center gap-8">
		<Button name="Home" id="home" href="/">
			<div class="-mx-2 flex items-center gap-2">
				<VideoCameraSolid size="lg" />
				<h1 class="text-lg">The Director Spectrum</h1>
			</div>
		</Button>
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
