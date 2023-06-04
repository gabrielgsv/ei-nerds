import { H5, Text } from "tamagui";

import { SelectType } from "../../store/useSelectContent";

export default function Overview({ select }: { select: SelectType }) {
  return (
    <>
      <H5 alignSelf="flex-start">Sinopse</H5>
      <Text mt={-10} col="$gray11">
        {select.overview}
      </Text>
    </>
  );
}
