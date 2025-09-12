import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <div className={`${css.wrapper} container`}>
        <h1 className={css.text}>Find your perfect rental car</h1>
        <h2 className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <button type="button" className={css.btn}>
          View Catalog
        </button>
      </div>
    </>
  );
};

export default HomePage;
