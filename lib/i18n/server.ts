import { createI18nServer } from 'next-international/server'

export const { getI18n, getScopedI18n, I18nProviderServer } = createI18nServer({
  en: () => import('../../messages/en.json'),
  es: () => import('../../messages/es.json')
})
