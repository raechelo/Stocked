import React from 'react';
import { shallow } from 'enzyme';
import { Form } from './Form';

describe('Form', () => {

  let wrapper;
  let ingredients = ['Mangoes', 'Jalapenos', 'Cilantro', 'Avocaods']
  let mockFetchIngredients = jest.fn();

  beforeEach(()=> {
    wrapper = shallow(<Form fetchIngredients={mockFetchIngredients} ingredients={ingredients} />)
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  
});