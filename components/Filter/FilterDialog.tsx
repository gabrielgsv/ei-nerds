import { useState } from "react";
import { Filter, X } from "@tamagui/lucide-icons";
import { Adapt, Button, Dialog, Sheet, Unspaced } from "tamagui";

type FilterDialogProps = {
  children: JSX.Element[] | JSX.Element;
};

export default function FilterDialog({ children }: FilterDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      modal
      onOpenChange={(open) => {
        setOpen(open);
      }}
    >
      <Dialog.Trigger asChild>
        <Button circular icon={Filter} bg="$gray7" />
      </Dialog.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" space>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animateOnly={["transform", "opacity"]}
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          space
        >
          <Dialog.Title>Filtros</Dialog.Title>
          {children}

          <Unspaced>
            <Dialog.Close asChild>
              <Button
                position="absolute"
                top="$3"
                right="$3"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
