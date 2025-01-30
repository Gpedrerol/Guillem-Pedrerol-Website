import { createI18nClient } from 'next-international/client'
import { createI18nServer } from 'next-international/server'

export const { useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
  en: () => import('../messages/en.json'),
  es: () => import('../messages/es.json')
})

export const { getI18n, getScopedI18n, I18nProviderServer } = createI18nServer({
  en: () => import('../messages/en.json'),
  es: () => import('../messages/es.json')
})
