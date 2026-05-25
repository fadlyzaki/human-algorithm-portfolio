import React, {
  createContext,
  useEffect,
  useContext,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
import en from "../data/translations.en";
import { STORAGE_KEYS } from "../config/constants";

const LanguageContext = createContext();
const languageLoaders = {
  en: () => Promise.resolve(en),
  id: () => import("../data/translations.id").then((module) => module.default),
};

const resolveTranslation = (bundle, key) => {
  const keys = key.split(".");
  let value = bundle;

  for (const k of keys) {
    value = value?.[k];
  }

  return value;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const languageTransitionTimeoutRef = useRef(null);
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    return savedLang || "en";
  });
  const [bundles, setBundles] = useState({ en });

  useEffect(() => {
    if (bundles[language]) return;

    let cancelled = false;
    languageLoaders[language]?.().then((bundle) => {
      if (cancelled) return;
      setBundles((current) => ({ ...current, [language]: bundle }));
    });

    return () => {
      cancelled = true;
    };
  }, [bundles, language]);

  const toggleLanguage = useCallback(() => {
    // Brief fade for smooth content transition
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("lang-switching");
    }

    const newLang = language === "en" ? "id" : "en";
    setLanguage(newLang);
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, newLang);

    if (!bundles[newLang]) {
      languageLoaders[newLang]?.().then((bundle) => {
        setBundles((current) => ({ ...current, [newLang]: bundle }));
      });
    }

    if (languageTransitionTimeoutRef.current) {
      clearTimeout(languageTransitionTimeoutRef.current);
    }

    languageTransitionTimeoutRef.current = setTimeout(() => {
      if (typeof document !== "undefined") {
        document.documentElement.classList.remove("lang-switching");
      }
      languageTransitionTimeoutRef.current = null;
    }, 150);
  }, [bundles, language]);

  useEffect(() => {
    return () => {
      if (languageTransitionTimeoutRef.current) {
        clearTimeout(languageTransitionTimeoutRef.current);
      }

      if (typeof document !== "undefined") {
        document.documentElement.classList.remove("lang-switching");
      }
    };
  }, []);

  const isIndonesian = language === "id";

  // Translation Helper
  const t = useCallback(
    (key, fallback) => {
      let value = resolveTranslation(bundles[language], key);

      // Fallback to English if missing
      if (!value && language !== "en") {
        value = resolveTranslation(bundles.en, key);
      }

      return value || fallback || key;
    },
    [bundles, language],
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      isIndonesian,
      t,
    }),
    [language, setLanguage, toggleLanguage, isIndonesian, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
