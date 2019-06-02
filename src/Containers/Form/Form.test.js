import React from 'react';
import { shallow } from 'enzyme';
import { Form } from './Form';
import { fetchResults } from '../../thunks/fetchResults';
import { fetchIngredients } from '../../thunks/fetchIngredients';

import { mapStateToProps, mapDispatchToProps } from './Form';

describe('Form', () => {

  jest.mock('../../thunks/fetchResults')
  jest.mock('../../thunks/fetchIngredients')

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

describe('mapStateToProps', () => {
  
  it('should return an object with the ingredients array', () => {
    const mockState = {
      ingredients: [{name:'Avocados', id: 1}]
    }
    const expected = {
      ingredients: [{name:'Avocados', id: 1}]
    }

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

});

describe('mapDispatchToProps', () => {

  it.skip('should call dispatch and fetch ingredients', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = fetchIngredients('www.placeholder.com');
    mapDispatchToProps(mockDispatch);
    
    
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch and fetch results', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = fetchResults('www.placeholder.com');
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleClick('www.placeholder.com');
    
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  
});