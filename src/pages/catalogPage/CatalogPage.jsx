import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCars } from '../../redux/operations';
import { selectCars, selectLoading, selectError } from '../../redux/selectors';
import CarsList from '../../components/CarsList/CarsList';

const CatalogPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className={`container`}>
      {loading && <p>Loading cars...</p>}
      {error && <p>{error}</p>}
      {cars.length && <CarsList />}
    </div>
  );
};

export default CatalogPage;
