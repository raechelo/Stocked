import { Results } from './Results';
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