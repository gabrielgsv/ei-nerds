import { Button, Dialog, Fieldset, Label, XStack } from "tamagui";

import { getSeries } from "../../../app/(tabs)/series/services";
import useSelectFilter from "../../../store/useSelectFilter";
import useSerieList from "../../../store/useSerieList";
import SelectList from "../../SelectList";
import movie_sort from "../filterFiles/movie_sort.json";
import series_genres from "../filterFiles/series_genres.json";

export default function FilterFormSeries() {
  const { totalPage, search, setPage, setSeries, setTotalPage } = useSerieList(
    (state) => state
  );
  const { seriesGenderId, seriesSortId, setSeriesGenderId, setSeriesSortId } =
    useSelectFilter((state) => state);
  const series_genres_list = series_genres;
  const series_sort_list = movie_sort;

  return (
    <>
      <Fieldset horizontal mb="$4" jc="space-between">
        <Label mt="$3" htmlFor="sort">
          Gênero:
        </Label>
        <SelectList
          val={seriesGenderId}
          setVal={setSeriesGenderId}
          items={series_genres_list}
          title="Gênero"
        />
      </Fieldset>

      <Fieldset horizontal mb="$4" jc="space-between">
        <Label mt="$3" justifyContent="flex-end" htmlFor="sort">
          Odernar por:
        </Label>
        <SelectList
          val={seriesSortId}
          setVal={setSeriesSortId}
          items={series_sort_list}
          title="Ordenar por"
        />
      </Fieldset>

      <XStack alignSelf="flex-end" space>
        <Dialog.Close displayWhenAdapted asChild>
          <Button
            theme="alt1"
            aria-label="Close"
            onPress={() => {
              setSeries([]);
              setPage(1);

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
            }}
          >
            Filtrar
          </Button>
        </Dialog.Close>
      </XStack>
    </>
  );
}
