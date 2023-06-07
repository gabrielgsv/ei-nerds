import { H5, Text, XStack } from "tamagui";

import { SelectType } from "../../store/useSelectContent";

export default function Title({ select }: { select: SelectType }) {
  const { title, original_name, release_date } = select;
  return (
    <XStack alignItems="center">
      <H5>{title || original_name}</H5>
      <Text col="$gray11">
        {release_date && `(${release_date.substring(0, 4)})`}
      </Text>
    </XStack>
  );
}
