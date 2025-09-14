import css from './MainDetails.module.css';

// функція для перетворення UUID у число
const getShortId = uuid => {
  // беремо лише цифри з UUID
  const digits = uuid.replace(/\D/g, '');
  // беремо останні 4 цифри
  return digits.slice(-4);
};

export default function MainDetails({ carDetails }) {
  // функція для розбору адреси
  const parseAddress = address => {
    if (!address) return { city: '', country: '' };
    const parts = address.split(',').map(s => s.trim());
    const country = parts.at(-1) || '';
    const city = parts.length > 1 ? parts.at(-2) : '';
    return { city, country };
  };

  const { city, country } = parseAddress(carDetails.address);

  return (
    <div className={css.wrap}>
      <div className={css.row}>
        <h2 className={css.title}>
          {carDetails.brand} {carDetails.model}, {carDetails.year}
        </h2>
        <span className={css.id}>Id: {getShortId(carDetails.id)}</span>
      </div>
      <div className={css.row}>
        <span className={css.mainInfo}>
          {city}, {country}
        </span>
        <span className={css.mainInfo}>
          Mileage: {carDetails.mileage.toLocaleString('uk-UA')} km
        </span>
      </div>
      <h2 className={css.price}>${carDetails.rentalPrice}</h2>
      <p className={css.description}>{carDetails.description}</p>
    </div>
  );
}
