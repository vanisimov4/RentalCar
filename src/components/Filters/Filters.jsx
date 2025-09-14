import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../../redux/operations';

import FilterSelect from './FilterSelect/FilterSelect';
import css from './Filters.module.css';

export default function Filters() {
  const dispatch = useDispatch();
  const brands = useSelector(state => state.filters.brands);

  useEffect(() => {
    if (brands.length === 0) {
      // щоб не перезапитувати
      dispatch(fetchBrands());
    }
  }, [dispatch, brands.length]);

  return (
    <div className={css.wrapper}>
      <FilterSelect brands={brands} />
      <FilterSelect />
    </div>
  );
}
