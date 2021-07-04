import React from 'react';
import { shallow } from 'enzyme';
import Character from '../src/components/Character';

describe('Character component', () => {
  it('displays a character', () => {
    const wrapper = shallow(<Character name='Rick' status='alive' species='human' image='img/rick.png' />);
    expect(wrapper).toMatchSnapshot();
  });
});
