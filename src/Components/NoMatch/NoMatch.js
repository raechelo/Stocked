import React from 'react';
import { Link } from 'react-router-dom';
import cuttingboard from '../../assets/cuttingboard.png';

export const NoMatch = () => {
  return (
    <div className="NoMatch">
      <h3>Sorry! That page doesn't exist.</h3>
      <img src={cuttingboard} />
      <Link className="back-btn" to='/'>
        <button>Go Back</button>
      </Link>
    </div>
  )
}

export default NoMatch;