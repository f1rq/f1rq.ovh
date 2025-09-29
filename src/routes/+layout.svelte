<script lang="ts">
    import '../app.css';
    import favicon from '$lib/assets/favicon.ico';
    import { isLoading } from 'svelte-i18n';
    import '$lib/i18n';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{#if $isLoading}
    <div class="flex items-center justify-center min-h-screen">
        <span class="loading loading-spinner loading-lg"></span>
    </div>
{:else}
    {@render children?.()}
{/if}