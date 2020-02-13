import I18n from './i18n';

/**
 * Translates text with options.
 *
 * @param key - I18n path key
 */
export function t(key, opts) {
  return key ? I18n.t(key, opts) : null;
}

export const toCurrency = value => `R$ ${value.toFixed(2).replace('.', ',')}`;
