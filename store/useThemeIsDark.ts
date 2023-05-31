import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ThemeIsDark {
  theme: boolean;
  toggleTheme: (checked: boolean) => void;
}

const useThemeIsDark = create<ThemeIsDark>()(
  persist(
    (set) => ({
      theme: false,
      toggleTheme: (checked) =>
        set(() => ({
          theme: checked
        }))
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);

export default useThemeIsDark;
