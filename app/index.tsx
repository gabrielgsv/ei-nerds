import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { H3, Spinner, YStack } from "tamagui";

import Header from "../components/Header";
import PanelCard from "../components/PanelCard";
import { SelectType } from "../store/useSelectContent";

import { getPopularMovies } from "./service";

export default function Home() {
  const [movies, setMovies] = useState<SelectType[]>([]);

  useEffect(() => {
    getPopularMovies().then((res) => setMovies(res.results));
  }, []);

  const getNumColumns = () => {
    const { width } = Dimensions.get("window");
    const numColumns = Math.floor(width / 144);
    return numColumns;
  };

  return (
    <>
      <Header title="Lançamentos" />

      <YStack m="$4" als="center">
        <H3 mb="$3">Filmes</H3>

        {movies.length > 0 ? (
          <FlatList
            data={movies}
            keyExtractor={(item) => item?.id?.toString()}
            renderItem={(item) => <PanelCard item={item.item} />}
            showsVerticalScrollIndicator={false}
            numColumns={getNumColumns()}
          />
        ) : (
          <Spinner size="large" color="$gray11" />
        )}
      </YStack>
    </>
  );
}
