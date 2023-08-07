import { SelectType } from "../../../store/useSelectContent";
import { getPopular } from "../../service";

export function getSeries(
  newPage: number,
  totalPage: number,
  search: string,
  movieGenderId: string,
  movieSortId: string,
  setPage: (number) => void,
  setSeries: (value: SelectType[], previus?: boolean) => void,
  setTotalPage: (number) => void
) {
  if (newPage > totalPage) return;
  setPage(newPage);
  getPopular(newPage, search, "tv", movieGenderId, movieSortId).then((res) => {
    if (search.length > 0 && newPage === 1) {
      setSeries(res.results);
    } else {
      setSeries(res.results, true);
    }
    setTotalPage(res.total_pages);
  });
}
