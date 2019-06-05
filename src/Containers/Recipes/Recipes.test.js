import React from 'react';
import { Recipes, mapDispatchToProps, mapStateToProps } from './Recipes';
import { shallow } from 'enzyme';
import { addFavorite } from '../../actions/index';

describe('Recipes', () => {

  let wrapper;
  let mockRecipes = [{title: 'Mango Salsa', id: 1}, {title: 'Bacon Pancakes', id: 2}, {title: 'Jalapeno Grilled Cheese', id: 3}]

  beforeEach(() => {
    wrapper = shallow(<Recipes recipes={mockRecipes} />);
  });

  it('should match the snapshot with all the data paseed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  
  it('should return an object with the recipes array', () => {
    const mockState = {
      recipes: [{name:'Avocados', id: 1}]
    }
    const expected = {
      recipes: [{name:'Avocados', id: 1}]
    }

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it('should return an object with the isLoading value', () => {
    const mockState = {
      isLoading: true
    }
    const expected = {
      isLoading: true
    }

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  let mockDispatch = jest.fn();

  it('should dispatch addFavorites', () => {
    const mockState = {
      favorites: ['Avocados', 'Mangoes']
    }
    const actionToDispatch = addFavorite(mockState);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addFavorite(mockState);
    
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});