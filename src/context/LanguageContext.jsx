import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    // Persist language preference
    useEffect(() => {
        const savedLang = localStorage.getItem('portfolio-lang-v1');
        if (savedLang) {
            setTimeout(() => setLanguage(savedLang), 0);
        }
    }, []);

    const toggleLanguage = useCallback(() => {
        // Brief fade for smooth content transition
        document.documentElement.classList.add('lang-switching');
        const newLang = language === 'en' ? 'id' : 'en';
        setLanguage(newLang);
        localStorage.setItem('portfolio-lang-v1', newLang);
        setTimeout(() => {
            document.documentElement.classList.remove('lang-switching');
        }, 150);
    }, [language]);

    const isIndonesian = language === 'id';

    // Translation Helper
    const t = useCallback((key) => {
        const keys = key.split('.');
        let value = translations[language];
        for (const k of keys) {
            value = value?.[k];
        }

        // Fallback to English if missing
        if (!value && language !== 'en') {
            value = translations['en'];
            for (const k of keys) {
                value = value?.[k];
            }
        }

        return value || key;
    }, [language]);

    const value = useMemo(() => ({
        language, setLanguage, toggleLanguage, isIndonesian, t
    }), [language, setLanguage, toggleLanguage, isIndonesian, t]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
