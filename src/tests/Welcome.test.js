/* eslint-disable */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Home from '../Components/welcome';

it('Home snapshot test', () => {
  const tree = TestRenderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
