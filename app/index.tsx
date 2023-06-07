import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { YStack } from "tamagui";

import Header from "../components/Header";
import List from "../components/List";
import SearchInput from "../components/SearchInput";
import { SelectType } from "../store/useSelectContent";

import { getPopularMovies } from "./service";

export default function Home() {
  const [movies, setMovies] = useState<SelectType[]>([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");

  const { width } = Dimensions.get("window");

  useEffect(() => getMovies(1), []);

  function getMovies(newPage: number) {
    if (newPage > totalPage) return;
    setPage(newPage);
    getPopularMovies(newPage, search).then((res) => {
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

      <YStack m="$4" als="center" width={width} px="$4">
        <SearchInput
          size="$3"
          search={search}
          setSearch={setSearch}
          getMovies={getMovies}
          setMovies={setMovies}
          setPage={setPage}
        />

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
