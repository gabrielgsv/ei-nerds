import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { Card, H3, Image, XStack, YStack } from "tamagui";

import Header from "../components/Header";
import useSelectContent, { SelectType } from "../store/useSelectContent";
import { API_IMAGE_URL } from "../utils/env";

import { getPopularMovies } from "./service";

export default function Home() {
  const [movies, setMovies] = useState<SelectType[]>([]);

  const router = useRouter();
  const setSelect = useSelectContent((state) => state.setSelect);

  useEffect(() => {
    getPopularMovies().then((res) => setMovies(res.results));
  }, []);

  return (
    <>
      <Header title="Lançamentos" />

      <YStack m="$4" als="center">
        <H3 mb="$3">Filmes</H3>

        <ScrollView>
          <XStack flexWrap="wrap" jc="space-around" gap="$3">
            {movies?.map((movie) => (
              <Card
                key={movie.id}
                elevate
                w="$12"
                h="$15"
                borderRadius={20}
                onPress={() => {
                  setSelect(movie);
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
                      uri: `${API_IMAGE_URL}/${movie.poster_path}`,
                    }}
                  />
                </Card.Background>
              </Card>
            ))}
          </XStack>
        </ScrollView>
      </YStack>
    </>
  );
}
