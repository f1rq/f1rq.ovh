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

    import ScrollReveal from './ScrollReveal.svelte'

    const skillCategories = {
        'Languages': [
            { name: 'Kotlin', logo: kotlinLogo, color: '#4e7ede', colorRgb: '78, 126, 222' },
            { name: "C#", logo: csharpLogo, color: '#68217a', colorRgb: '104, 33, 122' },
            { name: 'Python', logo: pythonLogo, color: '#fdd644', colorRgb: '254, 215, 69' },
        ],
        'Frameworks': [
            { name: 'Svelte', logo: svelteLogo, color: '#ff3e00', colorRgb: '255, 62, 0' },
            { name: 'Jetpack Compose', logo: jetpackLogo, color: '#4285f4', colorRgb: '66, 133, 244' },
            { name: 'Tailwind CSS', logo: tailwindLogo, color: '#06b6d4', colorRgb: '6, 182, 212' },
        ],
        'Tools': [
            { name: 'Git', logo: gitLogo, color: '#f05032', colorRgb: '240, 80, 50' },
            { name: 'Linux', logo: linuxLogo, color: '#fcc624', colorRgb: '252, 198, 36' },
        ],
        'Others': [
            { name: 'Arduino', logo: arduinoLogo, color: '#00979d', colorRgb: '0, 151, 157' },
            { name: 'JavaScript', logo: jsLogo, color: '#f7df1e', colorRgb: '247, 223, 30' },
        ],
    };
</script>

<div class="min-h-screen p-8 flex items-center justify-center">
    <div class="w-full max-w-4xl">
        <ScrollReveal duration={400} delay={0}>
            <h1 class="text-6xl font-bold mb-12 text-primary">{$_('skills')}</h1>
        </ScrollReveal>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {#each Object.entries(skillCategories) as [category, skills], catIndex}
                <div>
                    <h2 class="text-3xl font-semibold mb-6 text-secondary">{category}</h2>
                    <div class="flex flex-row flex-wrap gap-6">
                        {#each skills as skill, index}
                            <ScrollReveal duration={300} delay={index * 30} direction="up">
                                <div class="aspect-square w-22 h-22 backdrop-blur-md bg-base-100/60 rounded-xl transition-all duration-150 flex items-center justify-center skill-container"
                                     style="--skill-color: {skill.colorRgb || '170, 81, 255'}; --icon-color: {skill.color || '#aa51ff'};">
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
<!--<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {#each skills as skill, index}
          {#if index > 0 && skill.category !== skills[index - 1].category}
              <div class="col-span-full my"></div>
          {/if}
          <ScrollReveal duration={300} delay={index * 50} direction="up">
              <div class="p-4 backdrop-blur-md bg-base-100/60 rounded-lg transition-all duration-200 shadow-inner-primary">
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
                          <div class="w-2 h-2 rounded-full {i < skill.dots ? 'bg-primary' : 'bg-[#3e4559]'}"></div>
                      {/each}
                  </div>
              </div>
          </ScrollReveal>
      {/each}
  </div>-->
<style>
    .skill-container {
        box-shadow: inset 0 2px 6px rgba(var(--skill-color), 0.15),
        inset 0 -2px 6px rgba(var(--skill-color), 0.15),
        inset 2px 0 6px rgba(var(--skill-color), 0.1),
        inset -2px 0 6px rgba(var(--skill-color), 0.1);
    }

    .skill-container:hover {
        box-shadow: inset 0 2px 6px rgba(var(--skill-color), 0.15),
        inset 0 -2px 6px rgba(var(--skill-color), 0.15),
        inset 2px 0 6px rgba(var(--skill-color), 0.1),
        inset -2px 0 6px rgba(var(--skill-color), 0.1),
        0 0 20px rgba(var(--skill-color), 0.4),
        0 0 40px rgba(var(--skill-color), 0.2);
        transform: translateY(-2px);
    }

    .skill-icon :global(svg) {
        width: 3rem;
        height: 3rem;
        max-width: 3rem;
        max-height: 3rem;
    }

    .skill-icon :global(svg path),
    .skill-icon :global(svg circle),
    .skill-icon :global(svg rect),
    .skill-icon :global(svg polygon) {
        fill: var(--icon-color, #aa51ff);
    }
</style>