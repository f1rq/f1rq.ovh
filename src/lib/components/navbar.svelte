<script lang="ts">
    import { _, locale } from 'svelte-i18n'
    import { onMount } from 'svelte'

    let scrollY = 0
    let heroHeight = 0
    let isPolish = false
    let isMenuOpen = false
    let isDarkTheme = false

    onMount(() => {
        const heroElement = document.querySelector('.hero')
        if (heroElement) {
            heroHeight = (heroElement as HTMLElement).offsetHeight
        }

        // Set initial state based on current locale
        isPolish = $locale === 'pl'

        // Check initial theme state
        const themeController = document.querySelector('.theme-controller') as HTMLInputElement
        if (themeController) {
            isDarkTheme = themeController.checked
        }
    })

    $: isInHero = scrollY < heroHeight - 100

    // React to checkbox changes
    $: if (isPolish !== undefined) {
        locale.set(isPolish ? 'pl' : 'en')
    }

    // Sync theme across both controllers
    function handleThemeChange(event: Event) {
        const target = event.target as HTMLInputElement
        isDarkTheme = target.checked

        // Update all theme controllers
        const allThemeControllers = document.querySelectorAll('.theme-controller') as NodeListOf<HTMLInputElement>
        allThemeControllers.forEach(controller => {
            controller.checked = isDarkTheme
        })
    }

    function toggleMenu() {
        isMenuOpen = !isMenuOpen
    }

    function closeMenu() {
        isMenuOpen = false
    }
</script>

<svelte:window bind:scrollY />

<div class="fixed z-20 w-full px-2 py-2.5 sm:px-4 md:px-72 backdrop-blur-md bg-base-100/30">
    <div class="flex justify-between items-center py-4">
        <div class="px-4">
            <a href="/" class="header-link text-3xl font-bold transition-colors duration-200">
                <span class="text-primary">f1rq</span><span class="text-base-content">.ovh</span>
            </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:inline-flex items-center gap-6">
            <ul class="inline-flex flex-row gap-6">
                <li><a href="#skills" class="nav-link transition-colors duration-200 text-base-content hover:text-primary">{$_('nav1')}</a></li>
                <li><a href="#projects" class="nav-link transition-colors duration-200 text-base-content hover:text-primary">{$_('nav2')}</a></li>
                <li><a href="#contact" class="nav-link transition-colors duration-200 text-base-content hover:text-primary">{$_('nav3')}</a></li>
            </ul>
            <label class="swap swap-rotate group cursor-pointer">
                <input type="checkbox" class="theme-controller" value="wireframe" bind:checked={isDarkTheme} on:change={handleThemeChange} />
                <svg class="swap-off h-6 w-6 fill-current transition-colors duration-200 text-base-content group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg class="swap-on h-6 w-6 fill-current transition-colors duration-200 text-base-content group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
            </label>
            <label class="swap group cursor-pointer">
                <input type="checkbox" bind:checked={isPolish} />
                <div class="swap-on transition-colors duration-200 text-base-content group-hover:text-primary">🇵🇱</div>
                <div class="swap-off transition-colors duration-200 text-base-content group-hover:text-primary">🇺🇸</div>
            </label>
        </div>

        <!-- Mobile Menu Button -->
        <button
                class="md:hidden flex flex-col justify-center items-center w-8 h-8 group mr-4"
                on:click={toggleMenu}
                aria-label="Toggle menu"
        >
            <span class="hamburger-line {isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}"></span>
            <span class="hamburger-line {isMenuOpen ? 'opacity-0' : ''}"></span>
            <span class="hamburger-line {isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}"></span>
        </button>
    </div>
</div>

<!-- Mobile Menu Overlay -->
{#if isMenuOpen}
    <div class="md:hidden fixed inset-0 bg-base-100/70 backdrop-blur-md z-50">
        <!-- Close button -->
        <div class="absolute top-4 right-4 p-4">
            <button
                    class="flex flex-col justify-center items-center w-8 h-8 group"
                    on:click={closeMenu}
                    aria-label="Close menu"
            >
                <span class="hamburger-line rotate-45 translate-y-1.5"></span>
                <span class="hamburger-line opacity-0"></span>
                <span class="hamburger-line -rotate-45 -translate-y-1.5"></span>
            </button>
        </div>

        <!-- Menu content -->
        <div class="flex flex-col items-center justify-center h-full space-y-8">
            <ul class="flex flex-col items-center space-y-6">
                <li><a href="#skills" class="nav-link text-2xl transition-colors duration-200 text-base-content hover:text-primary" on:click={closeMenu}>{$_('nav1')}</a></li>
                <li><a href="#projects" class="nav-link text-2xl transition-colors duration-200 text-base-content hover:text-primary" on:click={closeMenu}>{$_('nav2')}</a></li>
                <li><a href="#contact" class="nav-link text-2xl transition-colors duration-200 text-base-content hover:text-primary" on:click={closeMenu}>{$_('nav3')}</a></li>
            </ul>

            <div class="flex items-center gap-6">
                <label class="swap swap-rotate group cursor-pointer">
                    <input type="checkbox" class="theme-controller" value="wireframe" bind:checked={isDarkTheme} on:change={handleThemeChange} />
                    <svg class="swap-off h-8 w-8 fill-current transition-colors duration-200 text-base-content group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg class="swap-on h-8 w-8 fill-current transition-colors duration-200 text-base-content group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
                <label class="swap group cursor-pointer">
                    <input type="checkbox" bind:checked={isPolish} />
                    <div class="swap-on text-3xl transition-colors duration-200 text-base-content group-hover:text-primary">🇵🇱</div>
                    <div class="swap-off text-3xl transition-colors duration-200 text-base-content group-hover:text-primary">🇺🇸</div>
                </label>
            </div>
        </div>
    </div>
{/if}

<style>
    .header-link {
        position: relative;
        padding-bottom: 4px;
        transition: color 200ms ease;
        display: inline-block;
    }

    .header-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #7f26da;
        transition: width 300ms ease-out;
    }

    .header-link:hover::after {
        width: 100%;
    }

    .nav-link {
        position: relative;
        padding-bottom: 1px;
        transition: color 200ms ease;
        display: inline-block;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-primary);
        transition: width 300ms ease-out;
    }

    .nav-link:hover::after {
        width: 100%;
    }

    .hamburger-line {
        width: 100%;
        height: 2px;
        background-color: var(--color-base-content);
        margin: 2px 0;
        transition: all 0.3s ease;
        transform-origin: center;
    }
</style>