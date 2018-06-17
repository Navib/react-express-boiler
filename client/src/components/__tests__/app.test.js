import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../app';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('renders App correctly', () => {
  expect(wrapped.length).toEqual(1);
});
