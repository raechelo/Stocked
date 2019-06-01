import React from 'react';
import { shallow } from 'enzyme';
import { Form } from './Form';
import { fetchResults } from '../../thunks/fetchResults';

describe('Form', () => {

  jest.mock('../../thunks/fetchResults')

  let wrapper;
  let ingredients = ['Mangoes', 'Jalapenos', 'Cilantro', 'Avocaods']
  let mockFetchIngredients = jest.fn();
  let mockFetchResults = jest.fn();

  beforeEach(()=> {
    wrapper = shallow(<Form fetchIngredients={mockFetchIngredients} ingredients={ingredients} fetchResults={mockFetchResults} />)

  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle changes', () => {
    wrapper.setState({ ingredientOne: '', ingredientTwo: '', ingredientThree: ''});
    const e = { label: { props: { name: 'ingredientOne'} }, value: { props: { value: 'Avocado Oil'} } }
    wrapper.instance().handleChange(e);
    expect(wrapper.state('ingredientOne')).toEqual('Avocado_Oil');
  });

  it('should handle clicks', () => {
    wrapper.setState({ ingredientOne: 'bacon', ingredientTwo: 'mac', ingredientThree: 'cheese'});
    wrapper.instance().handleClick()
    expect(mockFetchResults).toHaveBeenCalled();
  });
  
});