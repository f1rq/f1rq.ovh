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
        <h1 class="text-6xl font-bold mb-12">Projects</h1>
        </ScrollReveal>
        <div class="columns-1 sm:columns-2 lg:columns-2 gap-6 [column-fill:balance]">
            {#each projects as p, index}
                <ScrollReveal duration={300} delay={index * 50} direction="up">
                    <div class="mb-6 break-inside-avoid">
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
<!--            <ScrollReveal duration={400} delay={200}>
                <div class="mockup-phone w-64">
                    <div class="mockup-phone-camera"></div>
                    <div class="mockup-phone-display">
                        <img alt="wallpaper" src={LifeMapMockup1} class="w-full h-full object-cover" />
                    </div>
                </div>
            </ScrollReveal>

            <div class="flex flex-col justify-center">
                <ScrollReveal duration={400} delay={400}>
                    <h2 class="text-6xl font-bold mb-6">LifeMap</h2>
                </ScrollReveal>
                <ScrollReveal duration={400} delay={600}>
                    <p class="max-w-lg text-lg mb-6">{$_('lifemap1')}</p>
                </ScrollReveal>
            </div>
                    -->