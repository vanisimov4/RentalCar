import { useNavigate } from 'react-router-dom';

import css from './CarCard.module.css';

const Car = ({ car }) => {
  const navigate = useNavigate();

  //   const dispatch = useDispatch();

  //   const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.carCard}>
      <img
        src={car.img || '/placeholder.jpg'}
        alt={car.name}
        className={css.image}
      />
      <div className={css.cardContent}>
        <div className={css.caption}>
          <p className={css.info}>
            <span className={css.brand}>{car.brand}</span>{' '}
            <span className={css.model}>{car.model}</span>,{' '}
            <span className={css.year}>{car.year}</span>
          </p>
          <span className={css.price}>${car.rentalPrice}</span>
        </div>
      </div>
      <div></div>
      <button
        className={css.btn}
        onClick={() => navigate(`/catalog/${car._id}`)}
      >
        Read more
      </button>
      {/* <button onClick={handleDelete}>Delete</button> */}
    </div>
  );
};

export default Car;
