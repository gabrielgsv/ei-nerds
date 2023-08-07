import { useEffect } from "react";
import { X } from "@tamagui/lucide-icons";
import { Button, Input, SizeTokens } from "tamagui";

import { getSeries } from "../../app/(tabs)/series/services";
import useSelectFilter from "../../store/useSelectFilter";
import useSerieList from "../../store/useSerieList";
import useDebounce from "../../utils/useDebounce";

type Props = {
  size: SizeTokens;
};
export default function SearchSeries({ size }: Props) {
  const { totalPage, search, setPage, setSearch, setSeries, setTotalPage } =
    useSerieList((state) => state);

  const { seriesGenderId, seriesSortId, setSeriesGenderId, setSeriesSortId } =
    useSelectFilter((state) => state);

  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debounceSearch.length === 0) {
      return;
    }
    getSeries(
      1,
      totalPage,
      search,
      seriesGenderId,
      seriesSortId,
      setPage,
      setSeries,
      setTotalPage
    );
  }, [debounceSearch]);

  function handleSearch(text) {
    setSearch(text);
  }

  function ClearButton() {
    return (
      (search.length > 0 || seriesGenderId || seriesSortId) && (
        <Button
          size={size}
          br="$10"
          ml="$2"
          bg="$gray7"
          onPress={() => {
            setSearch("");
            setSeriesGenderId("");
            setSeriesSortId("");

            setSeries([]);
            setPage(1);

            getSeries(
              1,
              totalPage,
              "",
              "",
              "",
              setPage,
              setSeries,
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

      <ClearButton />
    </>
  );
}
