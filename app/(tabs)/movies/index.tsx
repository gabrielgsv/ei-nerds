import { Dimensions } from "react-native";
import { XStack } from "tamagui";

import FilterButton from "../../../components/Filter";
import Header from "../../../components/Header";
import List from "../../../components/List";
import SearchInput from "../../../components/SearchInput";

export default function Movies() {
  const { width } = Dimensions.get("window");

  const getNumColumns = () => {
    const numColumns = Math.floor(width / 144);
    return numColumns;
  };

  return (
    <>
      <Header title="Filmes" />

      <XStack alignItems="center" space="$2" my="$3" h="$4" mx="$7">
        <FilterButton />
        <SearchInput size="$3" />
      </XStack>

      <List getNumColumns={getNumColumns} />
    </>
  );
}
