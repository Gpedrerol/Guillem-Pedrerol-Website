'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { languages, Language } from '../utils/i18n';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex gap-2">
      {Object.entries(languages).map(([code, name]) => (
        <Button
          key={code}
          onClick={() => handleLanguageChange(code as Language)}
          className={`px-2 py-1 rounded ${
            language === code
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {name}
        </Button>
      ))}
    </div>
  );
}
