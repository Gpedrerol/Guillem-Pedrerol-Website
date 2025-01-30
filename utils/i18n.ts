import { en } from '../translations/en'
import { es } from '../translations/es'

export const languages = {
  en: 'English',
  es: 'Español',
} as const

export type Language = keyof typeof languages

export const translations = {
  en,
  es,
} as const

export type Translation = typeof en

export function getTranslation(locale: Language): Translation {
  return translations[locale]
}

export function isValidLanguage(lang: string): lang is Language {
  return lang in languages
}

export const defaultLanguage: Language = 'en'
