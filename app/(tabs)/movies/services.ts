import { SelectType } from "../../../store/useSelectContent";
import { getPopular } from "../../service";

export function getMovies(
  newPage: number,
  totalPage: number,
  search: string,
  movieGenderId: string,
  movieSortId: string,
  setPage: (number) => void,
  setMovies: (value: SelectType[], previus?: boolean) => void,
  setTotalPage: (number) => void
) {
  if (newPage > totalPage) return;
  setPage(newPage);
  getPopular(newPage, search, "movie", movieGenderId, movieSortId).then(
    (res) => {
      if (search.length > 0 && newPage === 1) {
        setMovies(res.results);
      } else {
        setMovies(res.results, true);
      }
      setTotalPage(res.total_pages);
    }
  );
}
