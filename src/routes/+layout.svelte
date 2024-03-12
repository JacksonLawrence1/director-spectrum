<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import NavBar from '../components/NavBar.svelte';
</script>

<NavBar />

<div class="pb-10 pt-20 min-h-screen">
	<slot />
</div>

<Footer />