import { Dimensions } from "react-native";
import { XStack } from "tamagui";

import Filter from "../../../components/Filter";
import Header from "../../../components/Header";
import ListSeries from "../../../components/List/ListSeries";
import SearchInput from "../../../components/SearchInput";

export default function Series() {
  const { width } = Dimensions.get("window");

  const getNumColumns = () => {
    const numColumns = Math.floor(width / 144);
    return numColumns;
  };

  return (
    <>
      <Header title="Séries" />
      <XStack alignItems="center" space="$2" my="$3" h="$4" mx="$7">
        <Filter isSeries />
        <SearchInput size="$3" />
      </XStack>

      <ListSeries getNumColumns={getNumColumns} />
    </>
  );
}
