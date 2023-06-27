/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { H5, Image, Square, Text } from "tamagui";

import useSelectContent, { SelectType } from "../../store/useSelectContent";
import { API_IMAGE_URL } from "../../utils/env";
import { getProvider, Item } from "../service";

export default function WatchProviders({ select }: { select: SelectType }) {
  type Response = {
    providers: Item[];
    link: string;
  };

  const [providerData, setProviderData] = useState<Item[]>([]);
  const [link, setLink] = useState<string>("");
  const type = useSelectContent((state) => state.type);

  useEffect(() => {
    getProvider(select.id, type).then((res: Response) => {
      setProviderData(res.providers || []);
      setLink(res.link);
    });
  }, []);

  const RenderProviders = ({ item }: { item: Item }) => (
    <Link href={link}>
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
    </Link>
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
