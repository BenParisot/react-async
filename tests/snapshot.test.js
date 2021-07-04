import React from 'react';
import { shallow } from 'enzyme';
import Quote from '../src/components/Quote';

describe('Quote component', () => {
  it('displays a quote', () => {
    const wrapper = shallow(<Quote character='Bender' quote='Bite my shiny metal ass!' image='img/bender.png' />);
    expect(wrapper).toMatchSnapshot();
  });
});
