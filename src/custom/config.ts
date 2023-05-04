/**
 * Override individual configuration values in this file.
 * The advantage over editing the values directly in the config folder
 * when working with a forked repository is that the files in the custom
 * folder will unlikely be touched by the upstream in the future,
 * so it is safe to make modifications to this file and assume
 * that no merge conflicts will happen.
 *
 * All overrides must be part of the default export of this file.
 */

import { NUMCustomAppConfig } from 'types';

const CUSTOM_CONFIG: NUMCustomAppConfig = {
  QR_APP_NAME: 'FORTEe',
  TRIGGER_RULES: [],
  FALLBACK_LANGUAGE_CODE: 'en',
  FEATURES_QUESTIONNAIRE_SHOW_LINKIDS: false,
};
export default CUSTOM_CONFIG;
