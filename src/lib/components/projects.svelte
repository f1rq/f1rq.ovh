<script>
    import { _, locale } from 'svelte-i18n'
    import ScrollReveal from './ScrollReveal.svelte'

    import LifeMapMockup1 from '$lib/assets/mockups/lifemapMockup1.jpg'
</script>

<div class="hero h-screen flex flex-row items-center justify-center">
    <h1 class="text-6xl font-bold mb-12">Projects</h1>
        <ScrollReveal duration={400} delay={200}>
            <div class="mockup-phone scale-50">
                <div class="mockup-phone-camera"></div>
                <div class="mockup-phone-display">
                    <img alt="wallpaper" src={LifeMapMockup1} />
                </div>
            </div>
        </ScrollReveal>

        <div class="ml-20">
            <ScrollReveal duration={400} delay={400}>
                <h1 class="text-6xl font-bold mb-6">LifeMap</h1>
            </ScrollReveal>
            <ScrollReveal duration={400} delay={600}>
                <p class="max-w-lg text-lg mb-6">{$_('lifemap1')}</p>
            </ScrollReveal>
        </div>
</div>