import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Congrats from './Congrats';

Enzyme.configure({ adapter: new Adapter() });

test('renders without error', () => {

});

test('renders no text when success props is false', () => {

});

test('renders non-empty congrats message when success props is true', () => {

});


