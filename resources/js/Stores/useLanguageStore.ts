// stores/languageStore.js

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguageStore = create(
    persist(
        (set) => ({
            selectedLanguage: {
                code: "en_US",
                name: "US",
                id: Math.random(),
                icon: "/flags/us.png",
            },

            setSelectedLanguage: (language: {
                code: string;
                icon: string;
                id: number;
                name: string;
            }) => set({ selectedLanguage: language }),
        }),
        {
            name: "language-storage",
        },
    ),
);
