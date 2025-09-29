<script>
    import { _, locale } from 'svelte-i18n'
</script>



<div class="hero min-h-screen bg-[#FAF7F5]">
    <div class="hero-content flex-col items-start pt-48">
        <h1 class="text-9xl font-bold text-[#1D232A]">f1rq</h1>
        <div class="flex flex-row gap-36 items-baseline">
            <p class="py-6 max-w-lg text-4xl text-[#1D232A]">{$_('main1')}</p>
            <div class="flex flex-col gap-4">
                <span class="text-sm md:max-w-md text-[#1D232A]">{$_('main2')}</span>
                <span class="text-sm md:max-w-md text-[#1D232A]">{$_('main3')}</span>
            </div>
        </div>
    </div>
</div>
