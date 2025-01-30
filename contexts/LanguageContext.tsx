'use client'

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react'
import { Language, defaultLanguage, getTranslation, Translation, isValidLanguage } from '../utils/i18n'

interface LanguageContextType {
  language: Language
  translation: Translation
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [translation, setTranslation] = useState<Translation>(getTranslation(defaultLanguage))

  useEffect(() => {
    // Try to get language from localStorage first
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && isValidLanguage(savedLanguage)) {
      setLanguage(savedLanguage as Language)
    } else {
      // Otherwise, detect browser language
      const browserLang = navigator.language.split('-')[0]
      if (isValidLanguage(browserLang)) {
        setLanguage(browserLang as Language)
      }
    }
  }, [])

  const setLanguage = useCallback((newLanguage: Language) => {
    if (!isValidLanguage(newLanguage)) return
    setLanguageState(newLanguage)
    setTranslation(getTranslation(newLanguage))
    document.documentElement.lang = newLanguage
    localStorage.setItem('language', newLanguage)
  }, [])

  const value = {
    language,
    translation,
    setLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
