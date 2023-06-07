/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { H5, Image, Square, Text } from "tamagui";

import useSelectContent, { SelectType } from "../../store/useSelectContent";
import { API_IMAGE_URL } from "../../utils/env";
import { getProvider } from "../service";

export default function WatchProviders({ select }: { select: SelectType }) {
  type Item = {
    provider_id: number;
    provider_name: string;
    logo_path: string;
  };

  const [providerData, setProviderData] = useState<Item[]>([]);
  const type = useSelectContent((state) => state.type);

  useEffect(() => {
    getProvider(select.id, type).then((res) => setProviderData(res || []));
  }, []);

  const RenderProviders = ({ item }: { item: Item }) => (
    <Square w="$11" p="$2" bg="$gray8" br="$4">
      <Image
        w={70}
        h={70}
        br="$6"
        source={{
          uri: `${API_IMAGE_URL}/${item.logo_path}`,
        }}
      />

      <Text mt="$2" fontSize="$1">
        {item.provider_name}
      </Text>
    </Square>
  );

  return (
    <>
      {providerData.length > 0 && (
        <>
          <H5 alignSelf="flex-start">Onde Assistir:</H5>

          <FlatList
            data={providerData}
            keyExtractor={(item) => item?.provider_id?.toString()}
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            renderItem={RenderProviders}
          />
        </>
      )}
    </>
  );
}
