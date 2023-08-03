import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Adapt, Select, Sheet, XStack, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

type SelectListProps = {
  val: string;
  setVal: (val: string) => void;
  items: {
    id: string;
    name: string;
  }[];
  title: string;
};

export default function SelectList({
  val,
  setVal,
  items,
  title,
}: SelectListProps) {
  return (
    <Select value={val} onValueChange={setVal}>
      <Select.Trigger width={180} iconAfter={ChevronDown}>
        <Select.Value placeholder="Selecione" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["$background", "$backgroundTransparent"]}
            borderRadius="$4"
          />
        </Select.ScrollUpButton>

        <Select.Viewport
          minWidth={200}
          enterStyle={{ o: 0, y: -10 }}
          exitStyle={{ o: 0, y: 10 }}
        >
          <XStack>
            <Select.Group space="$0">
              <Select.Label>{title}</Select.Label>
              {items.map((item, i) => {
                return (
                  <Select.Item index={i} key={item.id} value={item.id}>
                    <Select.ItemText>{item.name}</Select.ItemText>
                    <Select.ItemIndicator marginLeft="auto">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Group>
          </XStack>
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["$backgroundTransparent", "$background"]}
            borderRadius="$4"
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
}
