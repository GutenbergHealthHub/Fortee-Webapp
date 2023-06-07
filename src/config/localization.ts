import CUSTOM from 'custom/config';

import TRANSLATIONS_DE from './translations/de';
import TRANSLATIONS_EN from './translations/en';
import TRANSLATIONS_FR from './translations/fr';
import TRANSLATIONS_ES from './translations/es';
import TRANSLATIONS_IT from './translations/it';
import TRANSLATIONS_SL from './translations/sl';
import TRANSLATIONS_DK from './translations/dk';

import { NUMLanguage } from 'types';

// HINT: country emojis not shown on windows; PolyFill for browser w\ https://github.com/talkjs/country-flag-emoji-polyfill
export const LANGUAGES: NUMLanguage[] = CUSTOM.LANGUAGES ?? [
  { code: '🇩🇪', label: 'Deutsch', locale: 'de-DE' },
  { code: '🇬🇧', label: 'English', locale: 'en-US' },
  { code: '🇫🇷', label: 'Français', locale: 'fr-FR' },
  { code: '🇮🇹', label: 'Italiano', locale: 'it-IT' },
  { code: '🇪🇸', label: 'Español', locale: 'es-ES' },
  { code: '🇸🇮', label: 'Slovenščina', locale: 'sl-SL' },
  { code: '🇩🇰', label: 'Dansk', locale: 'da-DK' },
];

export const TRANSLATIONS = CUSTOM.TRANSLATIONS ?? {
  '🇩🇪': TRANSLATIONS_DE,
  '🇬🇧': TRANSLATIONS_EN,
  '🇫🇷': TRANSLATIONS_FR,
  '🇮🇹': TRANSLATIONS_IT,
  '🇪🇸': TRANSLATIONS_ES,
  '🇸🇮': TRANSLATIONS_SL,
  '🇩🇰': TRANSLATIONS_DK,
};

export const FALLBACK_LANGUAGE_CODE = CUSTOM.FALLBACK_LANGUAGE_CODE ?? 'de';
