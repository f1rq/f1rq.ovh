import { browser } from '$app/environment';
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// Register locales
register('en', () => import('./locales/en.json'));
register('pl', () => import('./locales/pl.json'));

// Initialize
init({
    fallbackLocale: 'en',
    initialLocale: browser ? (getLocaleFromNavigator() || 'en') : 'en',
});