import React from 'react';
import veggie from '../../assets/veggie.gif';

export const Loading = () => {
  return (
    <div>
      <h4>Loading...</h4>
      <img src={veggie} alt='loading gif' />
    </div>
  )
}

export default Loading;