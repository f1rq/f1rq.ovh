<script lang="ts">
    import { _ } from 'svelte-i18n'
    import ScrollReveal from './ScrollReveal.svelte'

    import github_logo_svg from '$lib/assets/svg-icons/github_logo.svg?raw'
    import discord_logo_svg from '$lib/assets/svg-icons/discord_logo.svg?raw'
    import telegram_logo_svg from '$lib/assets/svg-icons/telegram_logo.svg?raw'
    import mail_logo_svg from '$lib/assets/svg-icons/mail_logo.svg?raw'

    const contacts = [
        {
            name: "Telegram",
            href: "https://t.me/f1rqq",
            logoSvg: telegram_logo_svg,
            secondaryText: "@f1rqq"
        },
        {
            name: "E-mail",
            href: "mailto:contact@f1rq.ovh",
            logoSvg: mail_logo_svg,
            secondaryText: "contact@f1rq.ovh"
        },
        {
            name: "Github",
            href: "https://github.com/f1rq",
            logoSvg: github_logo_svg,
            secondaryText: "f1rq"
        },
        {
            name: "Discord",
            href: "https://discord.gg/YU5yWFt7vB",
            logoSvg: discord_logo_svg,
            secondaryText: "f1rq"
        }
    ]
</script>

<div class="hero min-h-[82vh] flex items-center justify-center bg-base-200" style="clip-path: polygon(0 0%, 100% 5%, 100% 100%, 0% 100%);">
    <div class="hero-content flex-col items-center w-full max-w-xl px-6">
        <ScrollReveal duration={400} direction="up">
            <h1 class="text-5xl font-bold text-primary self-start">{$_('contact')}</h1>
            <p class="text-base-content self-start ml-1">{$_('contact1')}</p>
        </ScrollReveal>
        <div class="grid gap-4 md:grid-cols-2 w-full">
            {#each contacts as contact, index}
                <ScrollReveal duration={300} delay={index * 50} direction="up">
                    <a href="{contact.href}" class="flex items-center gap-4 w-full rounded-lg p-2 hover:bg-primary/20" target="_blank">
                        <div class="h-12 w-12 bg-primary/25 flex items-center justify-center rounded-lg flex-shrink-0">
                            <div class="h-8 w-8 fill-primary">
                                {@html contact.logoSvg}
                            </div>
                        </div>
                        <div class="flex flex-col min-w-0 flex-1">
                            <span class="font-medium text-lg text-base-content">{contact.name}</span>
                            <span class="font-medium text-md text-base-content/80 truncate">{contact.secondaryText}</span>
                        </div>
                    </a>
                </ScrollReveal>
            {/each}
        </div>
    </div>
</div>