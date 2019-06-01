import React from 'react';
import { shallow } from 'enzyme';
import Instructions from './Instructions';

describe('Instructions', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Instructions />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});