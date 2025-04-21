import { create } from 'zustand'

export const useApp = create((set) => ({
    isDarkTheme: false,
    setIsDarkTheme: (isDarkTheme) => set({isDarkTheme}),
  }))