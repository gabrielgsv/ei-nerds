import { Moon, Sun } from "@tamagui/lucide-icons";
import { Switch, XStack } from "tamagui";

import useThemeIsDark from "../store/useThemeIsDark";

export default function ChangeTheme() {
  const theme = useThemeIsDark((state) => state.theme);
  const toggleTheme = useThemeIsDark((state) => state.toggleTheme);

  return (
    <XStack space="$2" ai="center">
      <Sun />
      <Switch
        size="$2"
        bg="$gray8"
        animation="bouncy"
        checked={theme}
        onCheckedChange={(checked) => {
          toggleTheme(checked);
        }}
      >
        <Switch.Thumb />
      </Switch>
      <Moon />
    </XStack>
  );
}
