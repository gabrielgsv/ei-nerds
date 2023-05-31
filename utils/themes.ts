import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export function darkTheme() {
  const theme = DarkTheme;
  theme.colors.background = "#212121";

  return theme;
}

export function lightTheme() {
  const theme = DefaultTheme;
  theme.colors = {
    ...theme.colors,
    background: "#e9e7e7",
    card: "#e9e7e7",
  };

  return theme;
}
