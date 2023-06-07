import { Suspense } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Text, Theme } from "tamagui";

import useThemeIsDark from "../store/useThemeIsDark";
import config from "../tamagui.config";
import { darkTheme, lightTheme } from "../utils/themes";

export default function Layout() {
  const theme = useThemeIsDark((state) => state.theme);

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return <SplashScreen />;
  }

  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <Suspense fallback={<Text>Loading...</Text>}>
          <Theme name={theme ? "dark" : "light"}>
            <ThemeProvider value={theme ? darkTheme() : lightTheme()}>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>
            </ThemeProvider>
          </Theme>
        </Suspense>
      </SafeAreaProvider>
      <StatusBar
        style={theme ? "light" : "dark"}
        backgroundColor={theme ? "#212121" : "#e9e7e7"}
      />
    </TamaguiProvider>
  );
}
