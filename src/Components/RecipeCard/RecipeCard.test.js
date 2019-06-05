import React from 'react';
import { shallow } from 'enzyme';
import RecipeCard from './RecipeCard';

describe('RecipeCard', () => {

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
    wrapper = shallow(<RecipeCard recipe={mockRecipe}/>);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should split the tags and return with octothorps', () => {

    mockRecipe = {
      name: 'Mac & Cheese',
      measure1: '1 cup',
      measure2: '1 cup',
      ingredient1: 'mac',
      ingredient2: 'cheese',
      instructions: 'boil water, cook noods. add cheese. eat.',
      link: 'www.macandcheese.com',
      yt: 'www.youtube.com/macandcheese',
      category: 'american',
      image: 'www.macandcheese.com/image'
    }

    expect(wrapper).toMatchSnapshot();
  });
});