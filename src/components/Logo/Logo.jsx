import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';
// import React from 'react';

const Logo = () => {
  return (
    <NavLink className={css.wrap} to={'/'} aria-label="Home">
      <svg className={css.icon}>
        <use href={`/logo.svg`}></use>
      </svg>
    </NavLink>
  );
};

export default Logo;
