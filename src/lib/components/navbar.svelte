<script lang="ts">
    import { _, locale } from 'svelte-i18n'
    import { onMount } from 'svelte'

    let scrollY = 0
    let heroHeight = 0

    onMount(() => {
        const heroElement = document.querySelector('.hero')
        if (heroElement) {
            heroHeight = (heroElement as HTMLElement).offsetHeight
        }
    })

    $: isInHero = scrollY < heroHeight - 100
</script>

<svelte:window bind:scrollY />

<div class="fixed z-20 w-full px-2 py-2.5 sm:px-4 md:px-72">
    <div class="flex justify-between items-center py-6">
        <ul class="inline-flex flex-row gap-6">
            <li><a href="#skills" class="transition-colors duration-300 {isInHero ? 'text-[#1D232A]' : 'text-base-content'}">{$_('nav1')}</a></li>
            <li><a class="transition-colors duration-300 {isInHero ? 'text-[#1D232A]' : 'text-base-content'}">{$_('nav2')}</a></li>
            <li><a class="transition-colors duration-300 {isInHero ? 'text-[#1D232A]' : 'text-base-content'}">{$_('nav3')}</a></li>
        </ul>
        <div class="px-4">
            <span class="font-medium transition-colors duration-300 {isInHero ? 'text-[#1D232A]' : 'text-base-content'}">f1rq</span>
        </div>
    </div>
</div>