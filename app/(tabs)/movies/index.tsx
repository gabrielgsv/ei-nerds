import { useState } from "react";
import { Dimensions } from "react-native";
import { BannerAd, TestIds } from "react-native-google-mobile-ads";
import { YStack } from "tamagui";

import Header from "../../../components/Header";
import List from "../../../components/List";
import SearchInput from "../../../components/SearchInput";
import { SelectType } from "../../../store/useSelectContent";
import { getPopular } from "../../service";

export default function Movies() {
  const [movies, setMovies] = useState<SelectType[]>([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");

  const { width } = Dimensions.get("window");

  function getMovies(newPage: number) {
    if (newPage > totalPage) return;
    setPage(newPage);
    getPopular(newPage, search, "movie", "popular").then((res) => {
      if (search.length > 0 && newPage === 1) {
        setMovies(res.results);
      } else {
        setMovies((value) => [...value, ...res.results]);
      }
      setTotalPage(res.total_pages);
    });
  }

  const getNumColumns = () => {
    const numColumns = Math.floor(width / 144);
    return numColumns;
  };

  return (
    <>
      <Header title="Filmes" />

      <SearchInput
        size="$3"
        search={search}
        setSearch={setSearch}
        getMovies={getMovies}
        setMovies={setMovies}
        setPage={setPage}
      />

      <YStack als="center" jc="center" pb="$6" px="$4">
        <List
          data={movies}
          getData={getMovies}
          getNumColumns={getNumColumns}
          page={page}
          totalPage={totalPage}
        />
      </YStack>
    </>
  );
}
