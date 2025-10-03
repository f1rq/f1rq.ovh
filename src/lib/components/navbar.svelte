<script lang="ts">
    import { _, locale } from 'svelte-i18n'
    import { onMount } from 'svelte'

    let scrollY = 0
    let heroHeight = 0
    let isPolish = false

    onMount(() => {
        const heroElement = document.querySelector('.hero')
        if (heroElement) {
            heroHeight = (heroElement as HTMLElement).offsetHeight
        }

        // Set initial state based on current locale
        isPolish = $locale === 'pl'
    })

    $: isInHero = scrollY < heroHeight - 100

    // React to checkbox changes
    $: if (isPolish !== undefined) {
        locale.set(isPolish ? 'pl' : 'en')
    }
</script>

<svelte:window bind:scrollY />

<div class="fixed z-20 w-full px-2 py-2.5 sm:px-4 md:px-72 backdrop-blur-md bg-base-100/30">
    <div class="flex justify-between items-center py-6">
        <ul class="inline-flex flex-row gap-6">
            <li><a href="#main" class="transition-colors duration-200 text-base-content hover:text-primary">{$_('nav0')}</a></li>
            <li><a href="#skills" class="transition-colors duration-200 text-base-content hover:text-primary">{$_('nav1')}</a></li>
            <li><a href="#projects" class="transition-colors duration-200 text-base-content hover:text-primary">{$_('nav2')}</a></li>
            <li><a href="#contact" class="transition-colors duration-200 text-base-content hover:text-primary">{$_('nav3')}</a></li>
        </ul>
        <div class="px-4 gap-6 inline-flex items-center">
            <label class="swap group cursor-pointer">
                <input type="checkbox" bind:checked={isPolish} />
                <div class="swap-on transition-colors duration-200 text-base-content group-hover:text-primary">🇵🇱</div>
                <div class="swap-off transition-colors duration-200 text-base-content group-hover:text-primary">🇺🇸</div>
            </label>
            <label class="swap swap-rotate">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" class="theme-controller" value="wireframe" />

                <!-- sun icon -->
                <svg
                        class="swap-off h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                    <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <!-- moon icon -->
                <svg
                        class="swap-on h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                    <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
            </label>
            <span class="font-medium text-primary-content">f1rq</span>
        </div>
    </div>
</div>