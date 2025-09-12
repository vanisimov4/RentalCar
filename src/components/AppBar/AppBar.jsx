import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './AppBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AppBar() {
  return (
    <header className={`${css.header} container`}>
      <p className={css.logo}>RentalCar</p>
      <nav className={css.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>

        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
