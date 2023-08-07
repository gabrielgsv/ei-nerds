import { useEffect } from "react";
import { X } from "@tamagui/lucide-icons";
import { Button, Input, SizeTokens } from "tamagui";

import { getMovies } from "../../app/(tabs)/movies/services";
import useMovieList from "../../store/useMovieList";
import useSelectFilter from "../../store/useSelectFilter";
import useDebounce from "../../utils/useDebounce";

type Props = {
  size: SizeTokens;
};
export default function SearchMovie({ size }: Props) {
  const { totalPage, search, setPage, setSearch, setMovies, setTotalPage } =
    useMovieList((state) => state);

  const { movieGenderId, movieSortId, setMovieGenderId, setMovieSortId } =
    useSelectFilter((state) => state);

  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debounceSearch.length === 0) {
      return;
    }
    getMovies(
      1,
      totalPage,
      search,
      movieGenderId,
      movieSortId,
      setPage,
      setMovies,
      setTotalPage
    );
  }, [debounceSearch]);

  function handleSearch(text) {
    setSearch(text);
  }

  function ClearButton() {
    return (
      (search.length > 0 || movieGenderId || movieSortId) && (
        <Button
          size={size}
          br="$10"
          ml="$2"
          bg="$gray7"
          onPress={() => {
            setSearch("");
            setMovieGenderId("");
            setMovieSortId("");

            setMovies([]);
            setPage(1);

            getMovies(
              1,
              totalPage,
              "",
              "",
              "",
              setPage,
              setMovies,
              setTotalPage
            );
          }}
          w="$3"
          icon={<X size="$1" />}
        />
      )
    );
  }

  return (
    <>
      <Input
        flex={1}
        size={size}
        br="$10"
        borderColor="$gray7"
        borderWidth={0.5}
        placeholderTextColor={"$gray12"}
        ta="center"
        value={search}
        onChangeText={(text) => {
          handleSearch(text);
        }}
        placeholder={"Pesquisar"}
      />
      <ClearButton />
    </>
  );
}
