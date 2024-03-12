<script lang="ts">
    export let size: "sm" | "md" | "lg" = "sm";
    export let number: string = "";
    export let text: string = "";
</script>

<div class="flex flex-col items-center gap-2 pb-8">
    {#if number !== ""}
        <p class="absolute text-xl -mt-10">{number}</p>
    {/if}
    {#if size === "sm"}
        <span class="dot size-[25px]"></span>
    {:else if size === "md"}
        <span class="dot size-[50px]"></span>
    {:else}
        <span class="dot size-[75px]"></span>
    {/if}
    {#if text !== ""}
        <p class="absolute mt-16">{text}</p>
    {/if}
</div>

<style>
	.dot {
		@apply rounded-full bg-gray-500 hover:bg-gray-900 dark:bg-gray-400 dark:hover:bg-white hover:cursor-pointer;
	}
</style>
