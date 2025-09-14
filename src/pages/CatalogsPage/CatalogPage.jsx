import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCars } from '../../redux/operations';
import {
  selectCars,
  selectLoading,
  selectError,
  selectTotalPages,
  selectPage,
} from '../../redux/selectors';
import CarsList from '../../components/CarsList/CarsList';
import Filters from '../../components/Filters/Filters';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchCars(page + 1));
  };

  return (
    <div className={`container`}>
      {loading && <p>Loading cars...</p>}
      {error && <p>{error}</p>}
      <Filters />
      {cars.length && <CarsList />}
      {totalPages > page && (
        <button type="button" className={css.btn} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
