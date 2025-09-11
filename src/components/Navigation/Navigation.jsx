import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink className={css.link} to="/">
        RentalCar
      </NavLink>

      <NavLink className={css.link} to="/cars">
        Cars
      </NavLink>
    </nav>
  );
};
