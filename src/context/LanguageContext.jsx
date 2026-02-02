import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    // Persist language preference
    useEffect(() => {
        const savedLang = localStorage.getItem('portfolio-lang');
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'id' : 'en';
        setLanguage(newLang);
        localStorage.setItem('portfolio-lang', newLang);
    };

    const isIndonesian = language === 'id';

    // Translation Helper
    const t = (key) => {
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
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isIndonesian, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
