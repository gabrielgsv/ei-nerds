import { usePathname, useRouter } from "expo-router";
import { Card, Image } from "tamagui";

import useSelectContent, { SelectType } from "../store/useSelectContent";
import { API_IMAGE_URL } from "../utils/env";

export default function PanelCard({ item }: { item: SelectType }) {
  const setSelect = useSelectContent((state) => state.setSelect);
  const setType = useSelectContent((state) => state.setType);
  const router = useRouter();
  const currentRoute = usePathname(); // "/movies" or "/series"

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
          setType(currentRoute === "/series" ? "tv" : "movie");
          router.push(`/detail`);
        }}
      >
        <Card.Background>
          <Image
            resizeMode="contain"
            alignSelf="center"
            width={150}
            height={205}
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
