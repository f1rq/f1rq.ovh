<script>
    import { _, locale } from 'svelte-i18n'

    import jsLogo from "$lib/assets/skills/Javascript_Logo.svg"
    import svelteLogo from "$lib/assets/skills/Svelte_Logo.svg"
    import tailwindLogo from "$lib/assets/skills/Tailwind_Logo.svg"
    import kotlinLogo from "$lib/assets/skills/Kotlin_Logo.svg"
    import jetpackLogo from "$lib/assets/skills/Jetpack_Logo.svg"
    import pythonLogo from "$lib/assets/skills/Python_Logo.svg"
    import arduinoLogo from "$lib/assets/skills/Arduino_Logo.svg"
    import gitLogo from "$lib/assets/skills/Git_Logo.svg"
    import linuxLogo from "$lib/assets/skills/Linux_Logo.svg"

    import ScrollReveal from './ScrollReveal.svelte'

    const currentYear = new Date().getFullYear()

    const skills = [
        { name: 'Kotlin', dots: 4, startYear: 2024, logo: kotlinLogo, category: 1 },
        { name: 'Jetpack Compose', dots: 4, startYear: 2024, logo: jetpackLogo, category: 1 },
        { name: 'Svelte', dots: 4, startYear: 2022, logo: svelteLogo, category: 2 },
        { name: 'Tailwind CSS', dots: 5, startYear: 2022, logo: tailwindLogo, category: 2 },
        { name: 'JavaScript', dots: 3, startYear: 2022, logo: jsLogo, category: 2 },
        { name: 'Python', dots: 3, startYear: 2022, logo: pythonLogo, category: 3 },
        { name: 'Arduino', dots: 2, startYear: 2023, logo: arduinoLogo, category: 3 },
        { name: 'Git', dots: 4, startYear: 2022, logo: gitLogo, category: 4 },
        { name: 'Linux', dots: 5, startYear: 2021, logo: linuxLogo, category: 4 },
    ];
</script>

<div class="min-h-screen p-8 flex items-center justify-center">
    <div class="w-full max-w-6xl">
        <ScrollReveal duration={400} delay={0}>
            <h1 class="text-6xl font-bold mb-12">{$_('skills')}</h1>
        </ScrollReveal>

        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {#each skills as skill, index}
                {#if index > 0 && skill.category !== skills[index - 1].category}
                    <div class="col-span-full my"></div>
                {/if}
                <ScrollReveal duration={300} delay={index * 50} direction="up">
                    <div class="p-4 bg-base-200 border border-neutral/20 rounded-lg hover:shadow-lg hover:border-neutral/20 transition-all duration-200">
                        <div class="flex items-center gap-3 mb-3">
                            <img src={skill.logo} alt={skill.name} class="w-8 h-8" />
                            <div class="flex-1">
                                <h3 class="font-semibold text-lg">{skill.name}</h3>
                                <div class="flex items-center gap-2 text-sm text-base-content/70">
                                    <span>{currentYear - skill.startYear}y</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-1">
                            {#each Array(5) as _, i}
                                <div class="w-2 h-2 rounded-full {i < skill.dots ? 'bg-base-content' : 'bg-base-300'}"></div>
                            {/each}
                        </div>
                    </div>
                </ScrollReveal>
            {/each}
        </div>
    </div>
</div>