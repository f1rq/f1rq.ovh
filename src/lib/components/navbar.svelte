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

<div class="fixed z-20 w-full px-2 py-2.5 sm:px-4 md:px-72">
    <div class="flex justify-between items-center py-6">
        <ul class="inline-flex flex-row gap-6">
<!--            <li><a href="#main" class="transition-colors duration-300 {isInHero ? 'text-[#1D232A]' : 'text-base-content'}">{$_('nav0')}</a></li>-->
            <li><a href="#skills" class="transition-colors duration-300 {isInHero ? 'text-[#1D232A]' : 'text-base-content'}">{$_('nav1')}</a></li>
            <li><a href="#projects" class="transition-colors duration-300 {isInHero ? 'text-[#1D232A]' : 'text-base-content'}">{$_('nav2')}</a></li>
            <li><a class="transition-colors duration-300 {isInHero ? 'text-[#1D232A]' : 'text-base-content'}">{$_('nav3')}</a></li>
        </ul>
        <div class="px-4 gap-6 inline-flex items-center">
            <label class="swap">
                <input type="checkbox" bind:checked={isPolish} />
                <div class="swap-on transition-colors duration-300 {isInHero ? 'text-[#1D232A]' : 'text-base-content'}">🇵🇱</div>
                <div class="swap-off transition-colors duration-300 {isInHero ? 'text-[#1D232A]' : 'text-base-content'}">🇺🇸</div>
            </label>
            <span class="font-medium transition-colors duration-300 {isInHero ? 'text-[#1D232A]' : 'text-base-content'}">f1rq</span>
        </div>
    </div>
</div>