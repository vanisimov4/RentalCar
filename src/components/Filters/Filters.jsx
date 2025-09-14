import FilterSelect from './FilterSelect/FilterSelect';
import css from './Filters.module.css';

export default function Filters() {
  return (
    <div className={css.wrapper}>
      <FilterSelect />
      <FilterSelect />
    </div>
  );
}
