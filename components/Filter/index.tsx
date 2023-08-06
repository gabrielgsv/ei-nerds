import FilterFormMovie from "./Form/FilterFormMovie";
import FilterFormSeries from "./Form/FilterFormSeries";
import FilterDialog from "./FilterDialog";

export default function Filter({ isSeries }: { isSeries?: boolean }) {
  return (
    <>
      <FilterDialog>
        {isSeries ? <FilterFormSeries /> : <FilterFormMovie />}
      </FilterDialog>
    </>
  );
}
