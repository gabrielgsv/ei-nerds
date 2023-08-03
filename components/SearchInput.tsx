import { useEffect } from "react";
import { X } from "@tamagui/lucide-icons";
import { Button, Input, SizeTokens, XStack } from "tamagui";

import { SelectType } from "../store/useSelectContent";
import useDebounce from "../utils/useDebounce";

type Props = {
  size: SizeTokens;
  search: string;
  setSearch: (search: string) => void;
  getMovies: (page: number) => void;
  setMovies: (movies: SelectType[]) => void;
  setPage: (page: number) => void;
};
export default function SearchInput({
  size,
  search,
  setSearch,
  getMovies,
  setMovies,
  setPage,
}: Props) {
  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debounceSearch.length === 0) {
      setMovies([]);
      setPage(1);
    }
    getMovies(1);
  }, [debounceSearch]);

  function handleSearch(text) {
    setSearch(text);
  }

  return (
    <>
      <Input
        flex={1}
        size={size}
        br="$10"
        borderColor="$gray10"
        borderWidth={0.5}
        placeholderTextColor={"$gray12"}
        ta="center"
        value={search}
        onChangeText={(text) => {
          handleSearch(text);
        }}
        placeholder={"Pesquisar"}
      />
      {search.length > 0 && (
        <Button
          size={size}
          br="$10"
          bg="$gray10"
          onPress={() => setSearch("")}
          w="$3"
          icon={<X size="$1" />}
        />
      )}
    </>
  );
}
