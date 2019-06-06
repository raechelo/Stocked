import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="Header">
      <h1>Stocked.</h1>
      <NavLink className="fave-link"><h3>Favorites</h3></NavLink>
    </header> 
  )
}
