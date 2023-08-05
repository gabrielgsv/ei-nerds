import { FlatList } from "react-native-gesture-handler";
import { Spinner, YStack } from "tamagui";

import { getMovies } from "../app/(tabs)/movies/services";
import useMovieList from "../app/(tabs)/movies/store/useMovieList";
import useSelectFilter from "../store/useSelectFilter";

import PanelCard from "./PanelCard";

type Props = {
  getNumColumns: () => number;
};

export default function List({ getNumColumns }: Props) {
  const { movies, totalPage, search, page, setPage, setMovies, setTotalPage } =
    useMovieList((state) => state);

  const { genderId, sortId } = useSelectFilter((state) => state);

  return (
    <YStack als="center" jc="center" pb={140} px="$4">
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <PanelCard item={item.item} />}
        showsVerticalScrollIndicator={false}
        numColumns={getNumColumns()}
        onEndReached={() =>
          getMovies(
            page + 1,
            totalPage,
            search,
            genderId,
            sortId,
            setPage,
            setMovies,
            setTotalPage
          )
        }
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          page < totalPage && <Spinner size="large" color="$gray11" />
        }
      />
    </YStack>
  );
}
