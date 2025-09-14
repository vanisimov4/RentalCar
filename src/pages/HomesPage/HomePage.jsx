import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${css.wrapper} container`}>
        <h1 className={`${css.text} ${css.title}`}>
          Find your perfect rental car
        </h1>
        <h2 className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <button
          type="button"
          className={css.btn}
          onClick={() => navigate(`/catalog`)}
        >
          View Catalog
        </button>
      </div>
    </>
  );
};

export default HomePage;
