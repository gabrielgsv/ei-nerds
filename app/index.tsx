import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Spinner, YStack } from "tamagui";

import Header from "../components/Header";
import PanelCard from "../components/PanelCard";
import SearchInput from "../components/SearchInput";
import { SelectType } from "../store/useSelectContent";

import { getPopularMovies } from "./service";

export default function Home() {
  const [movies, setMovies] = useState<SelectType[]>([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => getMovies(1), []);

  function getMovies(newPage: number) {
    if (newPage > totalPage) return;
    setPage(newPage);
    getPopularMovies(newPage, search).then((res) => {
      if (search.length > 0 && newPage === 1) {
        setMovies(res.results);
      } else {
        setMovies([...movies, ...res.results]);
      }
      setTotalPage(res.total_pages);
    });
  }

  const getNumColumns = () => {
    const { width } = Dimensions.get("window");
    const numColumns = Math.floor(width / 144);
    return numColumns;
  };

  return (
    <>
      <Header title="Filmes" />

      <YStack m="$4" als="center">
        <SearchInput
          size="$3"
          search={search}
          setSearch={setSearch}
          getMovies={getMovies}
          setMovies={setMovies}
        />

        <FlatList
          data={movies}
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={(item) => <PanelCard item={item.item} />}
          showsVerticalScrollIndicator={false}
          numColumns={getNumColumns()}
          onEndReached={() => getMovies(page + 1)}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() =>
            page < totalPage && <Spinner size="large" color="$gray11" />
          }
        />
      </YStack>
    </>
  );
}
