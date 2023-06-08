import { ArrowLeft } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { H4, Square, XStack } from "tamagui";

import useThemeIsDark from "../store/useThemeIsDark";

import ChangeTheme from "./ChangeTheme";

type Props = {
  title: string;
  back?: boolean;
};

export default function Header({ title, back }: Props) {
  const theme = useThemeIsDark((state) => state.theme);
  const router = useRouter();

  return (
    <XStack
      h="$5"
      jc="space-between"
      ai="center"
      px="$6"
      bg={theme ? "#212121" : "#e9e7e7"}
    >
      {back && <ArrowLeft size="$2" onPress={() => router.back()} />}
      <H4>{title}</H4>
      {back ? <Square w="$2" /> : <ChangeTheme />}
    </XStack>
  );
}
