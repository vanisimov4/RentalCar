import { useNavigate } from 'react-router-dom';

import css from './CarCard.module.css';

const Car = ({ car }) => {
  const navigate = useNavigate();

  // функція для розбору адреси
  const parseAddress = address => {
    if (!address) return { city: '', country: '' };
    const parts = address.split(',').map(s => s.trim());
    const country = parts.at(-1) || '';
    const city = parts.length > 1 ? parts.at(-2) : '';
    return { city, country };
  };

  const { city, country } = parseAddress(car.address);

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
        <div className={css.carMeta}>
          <div className={css.row}>
            <span>{city}</span>
            <span>{country}</span>
            <span>{car.rentalCompany}</span>
          </div>
          <div className={css.row}>
            <span>{car.type}</span>
            <span>{car.mileage.toLocaleString('uk-UA')} km</span>
          </div>
        </div>
      </div>
      <div></div>
      <button
        className={css.btn}
        onClick={() => navigate(`/catalog/${car.id}`)}
      >
        Read more
      </button>
      {/* <button onClick={handleDelete}>Delete</button> */}
    </div>
  );
};

export default Car;
