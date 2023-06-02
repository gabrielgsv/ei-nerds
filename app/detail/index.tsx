import { Dimensions } from "react-native";
import { Circle, H4, H5, H6, Image, Text, XStack, YStack } from "tamagui";

import Header from "../../components/Header";
import useSelectContent from "../../store/useSelectContent";
import { API_IMAGE_URL } from "../../utils/env";

const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width;

export default function Detail() {
  const select = useSelectContent((state) => state.select);

  function voteColor() {
    const vote = select.vote_average;
    switch (true) {
      case vote > 7:
        return "#34a853";
      case vote > 4:
        return "#f1c40f";
      case vote > 2:
        return "#e74c3c";
      default:
        break;
    }
  }
  return (
    <>
      <Header title="Sobre" />

      <YStack m="$4" alignItems="center" gap="$3">
        <Image
          w={imageWidth}
          h={200}
          style={{ opacity: 0.8, backgroundColor: "#000" }}
          source={{ uri: `${API_IMAGE_URL}/${select.backdrop_path}` }}
        />
        <XStack alignItems="center">
          <H5>{select.title}</H5>
          <Text col="$gray11">({select.release_date.substring(0, 4)})</Text>
        </XStack>

        <XStack
          borderColor="$gray11"
          borderWidth={2}
          borderRadius={30}
          alignItems="center"
          p="$1.5"
        >
          <H6 mx="$3">Avaliação dos usuários:</H6>
          <Circle size="$5" bg={voteColor()}>
            <H4 col="#fff">{select.vote_average * 10}</H4>
          </Circle>
        </XStack>

        <H5 alignSelf="flex-start">Sinopse</H5>
        <Text mt={-10} col="$gray11">
          {select.overview}
        </Text>
      </YStack>
    </>
  );
}
