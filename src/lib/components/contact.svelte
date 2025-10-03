<script lang="ts">
    import { _ } from 'svelte-i18n'
    import ScrollReveal from './ScrollReveal.svelte'

    import github_logo_svg from '$lib/assets/svg-icons/github_logo.svg?raw'


    const contacts = [
        {
            href: "https://github.com.f1rq",
            logoSvg: github_logo_svg
        }
    ]
</script>

<div class="hero min-h-screen">
    <div class="hero-content flex-col items-start pt-48">
        <ScrollReveal duration={400} direction="up">
            <h1 class="text-6xl font-bold mb-12">{$_('contact')}</h1>
        </ScrollReveal>
        <div class="grid gap-4 md:grid-cols-2">
            {#each contacts as contact, index}
                <ScrollReveal duration={300} delay={index * 50} direction="up">
                    <a href="{contact.href}" class="flex items-center gap-4 rounded-lg p-2 bg-white" target="_blank">
                        <div class="h-8 w-8 fill-black">
                            {@html contact.logoSvg}
                        </div>
                        <span class="font-medium text-lg text-black">{contact.href.replace('https://', '')}</span>
                    </a>
                </ScrollReveal>
            {/each}
        </div>
    </div>
</div>