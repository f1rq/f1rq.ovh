<script>
    import { _, locale } from 'svelte-i18n'

    import jsLogo from '$lib/assets/skills/Javascript_Logo.svg?raw'
    import svelteLogo from '$lib/assets/skills/Svelte_Logo.svg?raw'
    import tailwindLogo from '$lib/assets/skills/Tailwind_Logo.svg?raw'
    import kotlinLogo from '$lib/assets/skills/Kotlin_Logo.svg?raw'
    import jetpackLogo from '$lib/assets/skills/Jetpack_Logo.svg?raw'
    import pythonLogo from '$lib/assets/skills/Python_Logo.svg?raw'
    import arduinoLogo from '$lib/assets/skills/Arduino_Logo.svg?raw'
    import gitLogo from '$lib/assets/skills/Git_Logo.svg?raw'
    import linuxLogo from '$lib/assets/skills/Linux_Logo.svg?raw'
    import csharpLogo from '$lib/assets/skills/CS_Logo.svg?raw'
    import nodejsLogo from '$lib/assets/skills/Nodejs_Logo.svg?raw'
    import phpLogo from '$lib/assets/skills/php_Logo.svg?raw'

    import ScrollReveal from './ScrollReveal.svelte'

    const skillCategories = Object.freeze({
        cat_lang: Object.freeze([
            Object.freeze({ name: 'Kotlin', logo: kotlinLogo, color: '#4e7ede', colorRgb: '78, 126, 222' }),
            Object.freeze({ name: 'Python', logo: pythonLogo, color: '#fdd644', colorRgb: '254, 215, 69' }),
            Object.freeze({ name: "C#", logo: csharpLogo, color: '#68217a', colorRgb: '104, 33, 122' }),
        ]),
        cat_framework: Object.freeze([
            Object.freeze({ name: 'Svelte', logo: svelteLogo, color: '#ff3e00', colorRgb: '255, 62, 0' }),
            Object.freeze({ name: 'Jetpack Compose', logo: jetpackLogo, color: '#4285f4', colorRgb: '66, 133, 244' }),
            Object.freeze({ name: 'Tailwind CSS', logo: tailwindLogo, color: '#06b6d4', colorRgb: '6, 182, 212' }),
        ]),
        cat_tools: Object.freeze([
            Object.freeze({ name: 'Git', logo: gitLogo, color: '#f05032', colorRgb: '240, 80, 50' }),
            Object.freeze({ name: 'Linux', logo: linuxLogo, color: '#fcc624', colorRgb: '252, 198, 36' }),
            Object.freeze({ name: 'Node.js', logo: nodejsLogo, color: '#5fa04e', colorRgb: '95, 160, 78' }),
        ]),
        cat_others: Object.freeze([
            Object.freeze({ name: 'Arduino', logo: arduinoLogo, color: '#00979d', colorRgb: '0, 151, 157' }),
            Object.freeze({ name: 'JavaScript', logo: jsLogo, color: '#f7df1e', colorRgb: '247, 223, 30' }),
            Object.freeze({ name: 'php', logo: phpLogo, color: '#777bb3', colorRgb: '119, 123, 179'}),
        ]),
    });

    const categoryEntries = Object.entries(skillCategories);
</script>

<div class="min-h-screen py-24 px-4 md:p-0 flex items-center justify-center bg-base-200 relative skills-section">
    <div class="w-full max-w-4xl">
        <ScrollReveal duration={400} delay={0}>
            <h1 class="text-5xl font-bold mb-2 text-primary">{$_('skills')}</h1>
            <div class="w-52 h-1 bg-primary rounded-full mb-12"></div>
        </ScrollReveal>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {#each categoryEntries as [category, skills] (category)}
                <div>
                    <ScrollReveal duration={400} direction="up">
                        <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-base-content/80 text-left">{$_(category)}</h2>
                    </ScrollReveal>
                    <div class="flex flex-row flex-wrap gap-6 justify-center sm:justify-start">
                        {#each skills as skill (skill.name)}
                            <ScrollReveal duration={300} direction="up">
                                <div class="aspect-square w-16 h-16 sm:w-22 sm:h-22 backdrop-blur-md bg-base-100/60 rounded-xl skill-container"
                                     style="--skill-color: {skill.colorRgb}; --icon-color: {skill.color};">
                                    <div class="skill-icon">
                                        {@html skill.logo}
                                    </div>
                                </div>
                            </ScrollReveal>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .skills-section {
        clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0% 100%);
    }

    .skill-container {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(var(--skill-color), 0.2);
        transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
        transform: translateZ(0); /* Force hardware acceleration */
        backface-visibility: hidden;
    }

    .skill-container:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: 0 0 20px rgba(var(--skill-color), 0.3),
        0 0 40px rgba(var(--skill-color), 0.15);
    }

    .skill-icon :global(svg) {
        width: 2rem;
        height: 2rem;
        max-width: 2rem;
        max-height: 2rem;
        display: block;
    }

    @media (min-width: 640px) {
        .skill-icon :global(svg) {
            width: 3rem;
            height: 3rem;
            max-width: 3rem;
            max-height: 3rem;
        }
    }

    .skill-icon :global(svg path),
    .skill-icon :global(svg circle),
    .skill-icon :global(svg rect),
    .skill-icon :global(svg polygon) {
        fill: var(--icon-color);
    }
</style>