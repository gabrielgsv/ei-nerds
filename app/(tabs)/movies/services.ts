import { SelectType } from "../../../store/useSelectContent";
import { getPopular } from "../../service";

export function getMovies(
  newPage: number,
  totalPage: number,
  search: string,
  genderId: string,
  sortId: string,
  setPage: (number) => void,
  setMovies: (value: SelectType[], previus?: boolean) => void,
  setTotalPage: (number) => void
) {
  if (newPage > totalPage) return;
  setPage(newPage);
  getPopular(newPage, search, "discover", "movie", genderId, sortId).then(
    (res) => {
      console.log("res", res);
      if (search.length > 0 && newPage === 1) {
        setMovies(res.results);
      } else {
        setMovies(res.results, true);
      }
      setTotalPage(res.total_pages);
    }
  );
}
