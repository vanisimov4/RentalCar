import { useSelector } from 'react-redux';

import CarCard from '../CarCard/CarCard';
import { selectCars } from '../../redux/selectors';
import css from './CarsList.module.css';

const CarsList = () => {
  const visibleCars = useSelector(selectCars);
  console.log(visibleCars);

  return (
    <ul className={css.carsList}>
      {visibleCars.map(car => {
        return (
          <li key={car.id}>
            <CarCard car={car} />
          </li>
        );
      })}
    </ul>
  );
};

export default CarsList;
