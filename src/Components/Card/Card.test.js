import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {

  let wrapper;

  let mockRecipe = {
    name: 'Mac & Cheese',
    measure1: '1 cup',
    measure2: '1 cup',
    ingredient1: 'mac',
    ingredient2: 'cheese',
    instructions: 'boil water, cook noods. add cheese. eat.',
    link: 'www.macandcheese.com',
    yt: 'www.youtube.com/macandcheese',
    tags: 'noods, cheese',
    category: 'american',
    image: 'www.macandcheese.com/image'
  }

  beforeEach(() => {
    wrapper = shallow(<Card recipe={mockRecipe} />)
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});