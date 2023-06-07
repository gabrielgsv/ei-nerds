/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { H5, Image, Spinner, Square, Text } from "tamagui";

import useSelectContent, { SelectType } from "../../store/useSelectContent";
import { API_IMAGE_URL } from "../../utils/env";
import { getCredits } from "../service";

export default function Credits({ select }: { select: SelectType }) {
  type Item = {
    id: number;
    name: string;
    profile_path: string;
    character: string;
  };

  const [creditsData, setCreditsData] = useState<Item[]>([]);
  const type = useSelectContent((state) => state.type);

  useEffect(() => {
    getCredits(select.id, type).then((res) => setCreditsData(res));
  }, []);

  const RenderCredits = ({ item }: { item: Item }) => (
    <Square w="$11" p="$3" bg="$gray8" br="$4">
      <Image
        w={70}
        h={70}
        br="$10"
        source={{
          uri: `${API_IMAGE_URL}/${item.profile_path}`,
        }}
      />

      <Text mt="$2" fontSize="$1">
        {item.name}
      </Text>

      <Text fontSize="$1" col="$gray11">
        {item.character}
      </Text>
    </Square>
  );

  return (
    <>
      <H5 alignSelf="flex-start">Elenco</H5>

      {creditsData.length > 0 ? (
        <FlatList
          data={creditsData}
          keyExtractor={(item) => item?.id?.toString()}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          renderItem={RenderCredits}
        />
      ) : (
        <Spinner size="large" color="$gray11" />
      )}
    </>
  );
}
