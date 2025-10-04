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
            i18nKey: 'lifemap1',
            altText: 'LifeMap App Mockup',
            tags: ['Kotlin', 'Jetpack Compose', 'Android']
        },
        {
            id: 'nexo_bot2',
            imageSrc: NexoBotImage1,
            title: 'Nexo',
            i18nKey: 'nexo_bot1',
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
                    <ScrollReveal duration={300} delay={index * 50} direction="up">
                        <div class="mb-6 break-inside-avoid flex justify-center">
                            <HoverCard
                                    imageSrc={p.imageSrc}
                                    title={p.title}
                                    description={$_(p.i18nKey)}
                                    altText={p.altText}
                                    tags={p.tags}
                            />
                        </div>
                    </ScrollReveal>
                {/each}
            </div>
        </div>
    </div>
</div>