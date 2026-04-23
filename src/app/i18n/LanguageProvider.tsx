import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  languageStorageKey,
  translations,
  type Language,
  type TranslationDictionary,
} from "./translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  dictionary: TranslationDictionary;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = window.localStorage.getItem(languageStorageKey);
  return savedLanguage === "ar" ? "ar" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const dictionary = translations[language];
    document.documentElement.lang = language;
    document.documentElement.dir = dictionary.dir;
    document.body.dir = dictionary.dir;
    document.body.dataset.language = language;
    window.localStorage.setItem(languageStorageKey, language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const setLanguage = (nextLanguage: Language) => {
      setLanguageState(nextLanguage);
    };

    return {
      language,
      setLanguage,
      toggleLanguage: () =>
        setLanguageState((currentLanguage) =>
          currentLanguage === "en" ? "ar" : "en",
        ),
      dictionary: translations[language],
      dir: translations[language].dir,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
