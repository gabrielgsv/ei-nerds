import { H5, Text, XStack } from "tamagui";

import { SelectType } from "../../store/useSelectContent";

export default function Title({ select }: { select: SelectType }) {
  return (
    <XStack alignItems="center">
      <H5>{select.title}</H5>
      <Text col="$gray11">({select.release_date.substring(0, 4)})</Text>
    </XStack>
  );
}
