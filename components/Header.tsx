import { Stack } from "expo-router";
import { H4, XStack } from "tamagui";

import useThemeIsDark from "../store/useThemeIsDark";

import ChangeTheme from "./ChangeTheme";

export default function Header({ title }: { title: string }) {
  const theme = useThemeIsDark((state) => state.theme);

  return (
    <Stack.Screen
      options={{
        header: () => (
          <XStack
            h="$5"
            jc="space-around"
            ai="center"
            bg={theme ? "#212121" : "#e9e7e7"}
          >
            <H4>{title}</H4>
            <ChangeTheme />
          </XStack>
        ),
      }}
    />
  );
}
