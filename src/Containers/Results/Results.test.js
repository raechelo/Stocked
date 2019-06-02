import { Results, mapStateToProps } from './Results';
import { shallow } from 'enzyme';
import React from 'react';

describe('Results', () => {

  let wrapper;
  let recipes = [{title: 'Mac&Cheese'}]

  beforeEach(() => {
    wrapper = shallow(<Results recipes={recipes} />)
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();

    wrapper.setState({recipes: []})
    expect(wrapper).toMatchSnapshot();
  });

});

describe('mapStateToProps', () => {

  it('should return an object with an array of recipes', () => {
    const mockState = {
      recipes: [{name:'Mac&Cheese', id: 1}]
    }
    const expected = {
      recipes: [{name:'Mac&Cheese', id: 1}]
    }

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
})