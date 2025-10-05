<script lang="ts">
    import { _ } from 'svelte-i18n'
    import ScrollReveal from './ScrollReveal.svelte'
    import HoverCard from '$lib/components/HoverCard.svelte'

    import LifeMapImage1 from '$lib/assets/mockups/lifemapImage1.jpg'
    import NexoBotImage1 from '$lib/assets/mockups/nexo_screenshot.png'

    const projects = [
        {
            id: 'lifemap1',
            imageSrc: LifeMapImage1,
            title: 'LifeMap',
            short_desc: 'lifemap1',
            long_desc: 'lifemap2',
            altText: 'LifeMap App Mockup',
            tags: ['Kotlin', 'Jetpack Compose', 'Android']
        },
        {
            id: 'nexo_bot2',
            imageSrc: NexoBotImage1,
            title: 'Nexo',
            short_desc: 'nexo_bot1',
            long_desc: 'nexo_bot2',
            altText: 'Nexo Bot Screenshot',
            tags: ['Python', 'Discord.py']
        }
    ]
</script>

<div class="hero min-h-screen flex flex-col justify-center pt-24">
    <div class="w-full max-w-4xl mx-auto px-6">
        <ScrollReveal duration={400} direction="up">
            <h1 class="text-5xl font-bold mb-2 text-primary">{$_('projects')}</h1>
            <div class="w-64 h-1 bg-primary rounded-full mb-12"></div>
        </ScrollReveal>
        <div class="flex justify-center">
            <div class="columns-1 sm:columns-2 lg:columns-2 gap-6 [column-fill:balance] w-full max-w-sm sm:max-w-none">
                {#each projects as p, index}
                    <div class="drawer drawer-end">
                        <input id="drawer-{p.id}" type="checkbox" class="drawer-toggle" />
                        <div class="drawer-content">
                            <ScrollReveal duration={300} delay={index * 50} direction="up">
                                <div class="mb-6 break-inside-avoid flex justify-center">
                                    <label for="drawer-{p.id}" class="cursor-pointer">
                                        <HoverCard
                                                imageSrc={p.imageSrc}
                                                title={p.title}
                                                description={$_(p.short_desc)}
                                                altText={p.altText}
                                                tags={p.tags}
                                        />
                                    </label>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div class="drawer-side z-50">
                            <label for="drawer-{p.id}" aria-label="close sidebar" class="drawer-overlay"></label>
                            <div class="bg-base-200 text-base-content min-h-full w-full sm:w-lg relative">
                                <!-- Back arrow button -->
                                <div class="absolute top-6 left-8">
                                    <button
                                            class="flex items-center justify-center w-10 h-10 group bg-base-300 hover:bg-base-300/40 rounded-full transition-colors duration-200"
                                            on:click={() => {
                                                const drawer = document.getElementById(`drawer-${p.id}`) as HTMLInputElement;
                                                if (drawer) drawer.checked = false;
                                            }}
                                            aria-label="Close drawer"
                                    >
                                        <svg class="w-6 h-6 text-base-content transition-colors duration-200 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                        </svg>
                                    </button>
                                </div>
                                <hr class="absolute top-20 left-8 right-8 border-t border-base-300">

                                <div class="p-8 pt-24">
                                    <h2 class="text-3xl font-bold text-primary">{p.title}</h2>
                                    <div class="w-36 h-[0.20rem] bg-primary rounded-full mb-2"></div>
                                    <p class="text-base-content mb-6">{$_(p.short_desc)}</p>

                                    <img src={p.imageSrc} alt={p.altText} class="w-full h-auto rounded-lg mb-6 shadow-lg" />

                                    <h2 class="text-2xl font-bold text-primary">{$_('project_about')}</h2>
                                    <div class="w-24 h-[0.15rem] bg-primary rounded-full mb-2"></div>
                                    <p class="text-base-content mb-6">{$_(p.long_desc)}</p>

                                    <h2 class="text-2xl font-bold text-primary">{$_('project_tech')}</h2>
                                    <div class="w-24 h-[0.15rem] bg-primary rounded-full mb-2"></div>
                                    <div class="flex flex-wrap gap-2">
                                        {#each p.tags as tag}
                                            <span class="px-3 py-1 bg-primary/50 text-base-content rounded-full text-sm font-medium">{tag}</span>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>