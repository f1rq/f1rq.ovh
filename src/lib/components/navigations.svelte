<script>
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import { locale, isLoading } from 'svelte-i18n';
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('Initial locale:', $locale);
    });

    function changeLanguage(lang) {
        locale.set(lang);
        // Close dropdown by removing focus and clicking outside
        const activeEl = document.activeElement;
        if (activeEl && activeEl instanceof HTMLElement) {
            activeEl.blur();
        }
        document.body.click();
    }
</script>

<style>
    a {
        transition: background-color 0.2s;
        border-radius: 20%;
    }

    a i {
        transition: transform 0.2s;
    }

    a:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    a:hover i {
        transform: scale(1.15);
    }
</style>

<div class="btm-nav max-w-[20rem] max-h-[4rem] place-self-center mb-3 rounded-lg text-xl shadow-2xl bg-primary ">
    <a aria-label="Home" href="/">
        <i class="fa-solid fa-house"></i>
    </a>
    <a aria-label="Contact" href="/contact">
        <i class="fa-solid fa-address-book"></i>
    </a>
    <a aria-label="Skills" href="/skills">
        <i class="fa-solid fa-tools"></i>
    </a>
    <a aria-label="Projects" href="/projects">
        <i class="fa-solid fa-suitcase"></i>
    </a>
    <div class="dropdown dropdown-top dropdown-center">
        <div tabindex="0" role="button" class="flex justify-center items-center w-full h-full cursor-pointer">
            <i class="fa-solid fa-globe"></i>
        </div>
        <ul class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg">
            <li>
                <button
                        class:active={$locale === 'en' || $locale === 'en-US'}
                        on:click={() => changeLanguage('en')}>
                    <span>🇺🇸 English</span>
                    {#if $locale === 'en' || $locale === 'en-US'}
                        <i class="fa-solid fa-check"></i>
                    {/if}
                </button>
            </li>
            <li>
                <button
                        class:active={$locale === 'pl'}
                        on:click={() => changeLanguage('pl')}>
                    <span>🇵🇱 Polski</span>
                    {#if $locale === 'pl'}
                        <i class="fa-solid fa-check"></i>
                    {/if}
                </button>
            </li>
        </ul>

    </div>
</div>