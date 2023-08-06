import { Button, Dialog, Fieldset, Label, XStack } from "tamagui";

import { getMovies } from "../../../app/(tabs)/movies/services";
import useMovieList from "../../../store/useMovieList";
import useSelectFilter from "../../../store/useSelectFilter";
import SelectList from "../../SelectList";
import movie_genres from "../filterFiles/movie_genres.json";
import movie_sort from "../filterFiles/movie_sort.json";

export default function FilterFormMovie() {
  const { totalPage, search, setPage, setMovies, setTotalPage } = useMovieList(
    (state) => state
  );
  const { movieGenderId, movieSortId } = useSelectFilter((state) => state);

  const setMovieGenderId = useSelectFilter((state) => state.setMovieGenderId);
  const setMovieSortId = useSelectFilter((state) => state.setMovieSortId);

  const movie_genres_list = movie_genres;
  const movie_sort_list = movie_sort;

  return (
    <>
      <Fieldset horizontal mb="$4" jc="space-between">
        <Label mt="$3" htmlFor="sort">
          Gênero:
        </Label>
        <SelectList
          val={movieGenderId}
          setVal={setMovieGenderId}
          items={movie_genres_list}
          title="Gênero"
        />
      </Fieldset>

      <Fieldset horizontal mb="$4" jc="space-between">
        <Label mt="$3" justifyContent="flex-end" htmlFor="sort">
          Odernar por:
        </Label>
        <SelectList
          val={movieSortId}
          setVal={setMovieSortId}
          items={movie_sort_list}
          title="Ordenar por"
        />
      </Fieldset>

      <XStack alignSelf="flex-end" space>
        <Dialog.Close displayWhenAdapted asChild>
          <Button
            theme="alt1"
            aria-label="Close"
            onPress={() => {
              setMovies([]);
              setPage(1);

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
            }}
          >
            Filtrar
          </Button>
        </Dialog.Close>
      </XStack>
    </>
  );
}
