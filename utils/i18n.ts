import { en } from '../translations/en'
import { es } from '../translations/es'
import en from '@/messages/en.json'
import es from '@/messages/es.json'

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

export type Translation = typeof en | typeof es

const translations: Record<Language, Translation> = {
  en,
  es,
}

export function getTranslation(locale: Language): Translation {
  return translations[locale]
}

export function isValidLanguage(lang: string): lang is Language {
  return ['en', 'es'].includes(lang)
}

export const defaultLanguage: Language = 'es'
