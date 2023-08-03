import { Button, Dialog, Fieldset, Label, XStack } from "tamagui";

import SelectList from "../../SelectList";

import useSelectFilter from "./store/useSelectFilter";
import movie_genres from "./movie_genres.json";
import movie_sort from "./movie_sort.json";

export default function Form() {
  const genderId = useSelectFilter((state) => state.genderId);
  const sortId = useSelectFilter((state) => state.sortId);

  const setGenderId = useSelectFilter((state) => state.setGenderId);
  const setSortId = useSelectFilter((state) => state.setSortId);

  const movie_genres_list = movie_genres;
  const movie_sort_list = movie_sort;

  return (
    <>
      <Fieldset space="$4" horizontal>
        <Label width={160} justifyContent="flex-end" htmlFor="sort">
          Gênero:
        </Label>
        <SelectList
          val={genderId}
          setVal={setGenderId}
          items={movie_genres_list}
          title="Gênero"
        />
      </Fieldset>

      <Fieldset space="$4" horizontal>
        <Label width={160} justifyContent="flex-end" htmlFor="sort">
          Odernar por:
        </Label>
        <SelectList
          val={sortId}
          setVal={setSortId}
          items={movie_sort_list}
          title="Ordenar por"
        />
      </Fieldset>

      <XStack alignSelf="flex-end" space>
        <Dialog.Close displayWhenAdapted asChild>
          <Button theme="alt1" aria-label="Close">
            Filtrar
          </Button>
        </Dialog.Close>
      </XStack>
    </>
  );
}
