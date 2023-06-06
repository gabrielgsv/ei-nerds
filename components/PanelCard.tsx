import { useRouter } from "expo-router";
import { Card, Image } from "tamagui";

import useSelectContent, { SelectType } from "../store/useSelectContent";
import { API_IMAGE_URL } from "../utils/env";

export default function PanelCard({ item }: { item: SelectType }) {
  const setSelect = useSelectContent((state) => state.setSelect);
  const router = useRouter();
  return (
    <>
      <Card
        key={item.id}
        elevate
        w="$12"
        h="$15"
        m="$2"
        borderRadius={20}
        onPress={() => {
          setSelect(item);
          router.push("/detail");
        }}
      >
        <Card.Background>
          <Image
            resizeMode="contain"
            alignSelf="center"
            width={150}
            height={200}
            borderRadius={20}
            source={{
              uri: `${API_IMAGE_URL}/${item.poster_path}`,
            }}
          />
        </Card.Background>
      </Card>
    </>
  );
}
