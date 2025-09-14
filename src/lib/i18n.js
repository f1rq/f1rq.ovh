import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// Register locales
register('en', () => import('./locales/en.json'));
register('pl', () => import('./locales/pl.json'));

init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator() || 'en',
})