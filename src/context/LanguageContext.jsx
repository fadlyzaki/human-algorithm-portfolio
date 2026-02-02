import React, { createContext, useContext, useState, useEffect } from 'react';

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

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isIndonesian }}>
            {children}
        </LanguageContext.Provider>
    );
};
