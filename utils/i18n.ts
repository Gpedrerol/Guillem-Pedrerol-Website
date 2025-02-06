import { en as enTranslation } from '../translations/en'
import { es as esTranslation } from '../translations/es'
import enMessages from '@/messages/en.json'
import esMessages from '@/messages/es.json'

export const languages = {
  en: 'English',
  es: 'Español',
} as const

export type Language = 'en' | 'es'

type TranslationBase = {
  readonly navigation: {
    readonly services: string
    readonly aiConsulting: string
    readonly training: string
    readonly about: string
    readonly blog: string
    readonly contact: string
  }
  // Add other shared properties here
}

export type Translation = typeof enMessages | typeof esMessages

const translations: Record<Language, Translation> = {
  en: enMessages,
  es: esMessages,
}

export function getTranslation(locale: Language): Translation {
  return translations[locale]
}

export function isValidLanguage(lang: string): lang is Language {
  return ['en', 'es'].includes(lang)
}

export const defaultLanguage: Language = 'es'
