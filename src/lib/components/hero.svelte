<script>
    import { _ } from 'svelte-i18n'
</script>



<div class="hero min-h-screen bg-base-100">
    <div class="hero-content flex-col items-start pt-48">
        <h1 class="text-9xl font-bold text-primary">f1rq</h1>
        <div class="flex flex-row gap-36 items-baseline">
            <div class="flex flex-col">
                <p class="py-2 max-w-lg text-4xl text-base-content">{$_('main1')}</p>
            </div>
            <div class="flex flex-col gap-4">
                <span class="text-sm md:max-w-md text-base-content">{$_('main2')}</span>
                <span class="text-sm md:max-w-md text-base-content">{$_('main3')}</span>
            </div>
        </div>
    </div>
</div>
