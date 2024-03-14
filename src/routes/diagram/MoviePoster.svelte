<script lang="ts">
    import type { Movie } from "$lib/stores/directors";

    export let movie: Movie;
</script>

<div class="flex flex-col gap-4">
    <img src={movie.image} class="h-72 w-48 object-cover rounded-lg" alt="Movie Poster" />
    <p class="text-center max-w-48">{movie.title}</p>
</div>