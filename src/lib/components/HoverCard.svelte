<script lang="ts">
    export let imageSrc: string;
    export let title: string;
    export let description: string;
    export let altText: string = '';
    export let tags: string[] = ['example tag'];

    let isHovered = false;

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            isHovered = !isHovered;
        }
    }
</script>

<div
        class="image-card relative overflow-hidden rounded-lg cursor-pointer group shadow-primary-forhovercard"
        role="button"
        tabindex="0"
        on:mouseenter={() => isHovered = true}
        on:mouseleave={() => isHovered = false}
        on:keydown={handleKeydown}
>
    <img
            src={imageSrc}
            alt={altText}
            class="w-full h-full object-cover brightness-80 transition-[filter] duration-300 ease-in-out"
            class:dimmed={isHovered}
    />

    <div
            class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-300 inset-shadow-sm/20"
            class:opacity-50={!isHovered}
            class:opacity-100={isHovered}
    ></div>

    <div
            class="absolute bottom-0 left-0 right-0 p-6 z-10 text-[#FAF7F5] transition-all duration-300 ease-out"
            class:translate-y-4={!isHovered}
            class:opacity-0={!isHovered}
            class:translate-y-0={isHovered}
            class:opacity-100={isHovered}
    >
        <h3 class="text-3xl font-extrabold mb-2">{title}</h3>
        <p class="text-sm opacity-90 mb-2">{description}</p>
        {#each tags as tag, index}
            <span class="bg-primary/50 px-3 py-2 tag rounded-full text-base-content text-xs">{tag}</span>
        {/each}
    </div>
</div>

<style>
    .image-card {
        width: 25vw;
        height: 25vw;
        min-width: 200px;
        min-height: 200px;
        max-width: 400px;
        max-height: 400px;
    }

    .dimmed {
        filter: brightness(0.5);
    }

    .tag + .tag {
        margin-left: 0.5rem;
    }
</style>