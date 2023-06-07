import { FlatList } from "react-native-gesture-handler";
import { Spinner } from "tamagui";

import { SelectType } from "../store/useSelectContent";

import PanelCard from "./PanelCard";

type Props = {
  data: SelectType[];
  page: number;
  totalPage: number;
  getNumColumns: () => number;
  getData: (page: number) => void;
};

export default function List({
  data,
  page,
  totalPage,
  getNumColumns,
  getData,
}: Props) {
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <PanelCard item={item.item} />}
        showsVerticalScrollIndicator={false}
        numColumns={getNumColumns()}
        onEndReached={() => getData(page + 1)}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          page < totalPage && <Spinner size="large" color="$gray11" />
        }
      />
    </>
  );
}
