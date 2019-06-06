import React from 'react';
import { shallow } from 'enzyme';
import { Favorites } from './Favorites';

describe('Favorites', () => {

  let wrapper;

  let favorites = [{title: 'M&C'}, {title:'Mango Salsa'}]

  beforeEach(() => {
    wrapper = shallow (<Favorites favorites={favorites} />)
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});