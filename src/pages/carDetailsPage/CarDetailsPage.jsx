import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCarDetails } from '../../redux/operations';
import {
  selectCarDetails,
  selectLoading,
  selectError,
} from '../../redux/selectors';
import CarImage from '../../components/CarDetails/CarImage/CarImage';
import BookForm from '../../components/CarDetails/BookForm/BookForm';
import MainDetails from '../../components/CarDetails/MainDetails/MainDetails';
import DetailsList from '../../components/CarDetails/DetailsList/DetailsList';
import Specifications from '../../components/CarDetails/Specifications/Specifications';
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
            <MainDetails carDetails={carDetails} />
            <div className={css.features}>
              <div>
                <h3>Rental Conditions: </h3>
                <DetailsList features={carDetails.rentalConditions} />
              </div>
              <div>
                <h3>Car Specifications: </h3>
                <Specifications carDetails={carDetails} />
              </div>
              <div>
                <h3>Accessories and functionalities: </h3>
                <DetailsList
                  features={[
                    ...carDetails.accessories,
                    ...carDetails.functionalities,
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailsPage;
