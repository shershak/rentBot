// Locales

import { Locale } from "./models/locale.model";

// export const LOCALES: string[] = ['en', 'ua', 'cz', 'ru'];
export const LOCALES: Locale[] = [
  { id: 'en', name: 'English', icon: '🇬🇧' },
  { id: 'ua', name: 'Українська', icon: '🇺🇦' }, 
  { id:'cz', name: 'Čeština', icon: '🇨🇿' },
  { id: 'ru', name: 'Русский', icon: '🏳️‍🌈' }
];
export const LOCALES_DIR: string = './src/assets/locales';
export const DEFAULT_LOCALE: string = 'en';