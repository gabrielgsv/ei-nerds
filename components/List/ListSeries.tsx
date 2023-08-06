import { FlatList } from "react-native-gesture-handler";
import { Spinner, YStack } from "tamagui";

import { getSeries } from "../../app/(tabs)/series/services";
import useSelectFilter from "../../store/useSelectFilter";
import useSerieList from "../../store/useSerieList";
import PanelCard from "../PanelCard";

type Props = {
  getNumColumns: () => number;
};

export default function ListSeries({ getNumColumns }: Props) {
  const { series, totalPage, search, page, setPage, setSeries, setTotalPage } =
    useSerieList((state) => state);

  const { movieGenderId, movieSortId } = useSelectFilter((state) => state);

  return (
    <YStack als="center" jc="center" pb={140} px="$4">
      <FlatList
        data={series}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <PanelCard item={item.item} />}
        showsVerticalScrollIndicator={false}
        numColumns={getNumColumns()}
        onEndReached={() =>
          getSeries(
            page + 1,
            totalPage,
            search,
            movieGenderId,
            movieSortId,
            setPage,
            setSeries,
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
