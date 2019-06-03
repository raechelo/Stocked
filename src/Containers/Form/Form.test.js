import React from 'react';
import { shallow } from 'enzyme';
import { Form, mapStateToProps, mapDispatchToProps } from './Form';
import { fetchResults } from '../../thunks/fetchResults';
import { fetchIngredients } from '../../thunks/fetchIngredients';

jest.mock('../../thunks/fetchResults')
jest.mock('../../thunks/fetchIngredients')

describe('Form', () => {

  let wrapper;
  let ingredients = ['Mangoes', 'Jalapenos', 'Cilantro', 'Avocaods']
  let mockFetchIngredients;
  let mockFetchResults

  beforeEach(()=> {
    mockFetchIngredients = jest.fn();
    mockFetchResults = jest.fn();

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
  let mockDispatch = jest.fn();

  it('should dispatch ingredients on call of fetch ingredients', () => {
    const mockState = {
      ingredients: ['Avocados', 'Mangoes']
    }
    const actionToDispatch = fetchIngredients(mockState);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchIngredients(mockState);
    
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch and fetch results', () => {
    const mockState = {
      results: [{title: 'Mango Salsa'}]
    }
    const actionToDispatch = fetchResults(mockState);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchResults(mockState);
    
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

});