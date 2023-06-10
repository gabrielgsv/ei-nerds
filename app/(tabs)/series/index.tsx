import { useState } from "react";
import { Dimensions } from "react-native";
import { YStack } from "tamagui";

import Header from "../../../components/Header";
import List from "../../../components/List";
import SearchInput from "../../../components/SearchInput";
import { SelectType } from "../../../store/useSelectContent";
import { getPopular } from "../../service";

export default function Series() {
  const [series, setSeries] = useState<SelectType[]>([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");

  const { width } = Dimensions.get("window");

  function getSeries(newPage: number) {
    if (newPage > totalPage) return;
    setPage(newPage);
    getPopular(newPage, search, "tv", "top_rated").then((res) => {
      if (search.length > 0 && newPage === 1) {
        setSeries(res.results);
      } else {
        setSeries((value) => [...value, ...res.results]);
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
      <Header title="Séries" />
      <SearchInput
        size="$3"
        search={search}
        setSearch={setSearch}
        getMovies={getSeries}
        setMovies={setSeries}
        setPage={setPage}
      />

      <YStack m="$4" als="center" pb="$6" px="$4">
        <List
          data={series}
          getData={getSeries}
          getNumColumns={getNumColumns}
          page={page}
          totalPage={totalPage}
        />
      </YStack>
    </>
  );
}
