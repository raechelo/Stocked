import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="Header">
      <NavLink to='/'><h1>Stocked.</h1></NavLink>
      <NavLink to='/favorites' className="fave-link"><h3>Favorites</h3></NavLink>
    </header> 
  )
}
