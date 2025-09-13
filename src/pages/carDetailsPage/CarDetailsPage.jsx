import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCarDetails } from '../../redux/operations';
import {
  selectCarDetails,
  selectLoading,
  selectError,
} from '../../redux/selectors';
import CarImage from '../../components/CarDetails/CarImage/CarImage';
import BookForm from '../../components/CarDetails/BookForm/BookForm';
import css from './CarDetailsPage.module.css';

const CarDetailsPage = () => {
  const { id } = useParams();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const carDetails = useSelector(selectCarDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarDetails(id));
  }, [id, dispatch]);

  return (
    <div className={`container`}>
      {loading && <p>Loading car details...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && carDetails && (
        <div className={css.wrap}>
          <div className={css.leftColumn}>
            <CarImage src={carDetails.img} alt={carDetails.description} />
            <BookForm />
          </div>
          <div className={css.rightColumn}>
            <CarImage src={carDetails.img} alt={carDetails.description} />
            <BookForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailsPage;
