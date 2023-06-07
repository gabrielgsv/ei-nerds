import { Film, Tv } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { XStack } from "tamagui";

export default function Layout() {
  const IconContainer = ({ children }: { children: React.ReactNode }) => {
    return <XStack mt="$2">{children}</XStack>;
  };

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: true,
          title: "",
        }}
      >
        <Tabs.Screen
          name="movies/index"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <IconContainer>
                  <Film size="$1.5" color={focused ? "$gray12" : "$gray11"} />
                </IconContainer>
              );
            },
          }}
        />
        <Tabs.Screen
          name="series/index"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <IconContainer>
                  <Tv size="$1.5" color={focused ? "$gray12" : "$gray11"} />
                </IconContainer>
              );
            },
          }}
        />
      </Tabs>
    </>
  );
}
