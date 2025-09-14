<script>
    import '../lib/i18n.js';
	import '../app.css';
	let { children } = $props();
    import { init, getLocaleFromNavigator } from 'svelte-i18n';

    init({
        fallbackLocale: 'en',
        initialLocale: getLocaleFromNavigator(),
    });
</script>
{@render children()}

