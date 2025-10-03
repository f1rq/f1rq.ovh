<script>
    import { _ } from 'svelte-i18n'

    import github_logo_svg from '$lib/assets/svg-icons/github_logo.svg?raw'
    import discord_logo_svg from '$lib/assets/svg-icons/discord_logo.svg?raw'
    import spotify_logo_svg from '$lib/assets/svg-icons/spotify_logo.svg?raw'
    import coffe_logo_svg from '$lib/assets/svg-icons/coffe_logo.svg?raw'

    const links = [
        {
            href: "https://github.com.f1rq",
            logoSvg: github_logo_svg,
        },
        {
            href: "https://buymeacoffee.com/f1rq",
            logoSvg: coffe_logo_svg
        },
        {
            href: "https://open.spotify.com/user/dcfv3p5qxwa0sfdimxgyqabri",
            logoSvg: spotify_logo_svg,
        },
        {
            href: "https://discord.com/invite/YU5yWFt7vB",
            logoSvg: discord_logo_svg,
        },

    ]
</script>



<div class="hero min-h-screen bg-base-100">
    <div class="hero-content flex-col items-start pt-48">
        <h1 class="text-9xl font-bold text-primary">f1rq</h1>
        <div class="flex flex-row gap-36 items-baseline">
            <div class="flex flex-col">
                <p class="py-2 max-w-lg text-4xl text-base-content">{$_('main1')}</p>
                <!--<div class="flex flex-row gap-1">
                    {#each links as link}
                        <a href={link.href} target="_blank">
                            <div class="h-8 w-8 fill-[#1D232A]">
                                {@html link.logoSvg}
                            </div>
                        </a>
                    {/each}
                </div>-->
            </div>
            <div class="flex flex-col gap-4">
                <span class="text-sm md:max-w-md text-base-content">{$_('main2')}</span>
                <span class="text-sm md:max-w-md text-base-content">{$_('main3')}</span>
            </div>
        </div>
    </div>
</div>
