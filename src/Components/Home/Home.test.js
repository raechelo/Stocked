import { Home } from './Home';
import { shallow } from 'enzyme';
import React from 'react';

describe('Home', () => {

  let wrapper;
  let recipes = [{title: 'Mac&Cheese'}]

  beforeEach(() => {
    wrapper = shallow(<Home recipes={recipes} />)
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();

    wrapper.setState({recipes: []})
    expect(wrapper).toMatchSnapshot();
  });

});