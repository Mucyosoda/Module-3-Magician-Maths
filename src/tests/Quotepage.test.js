/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Components/quotePage';

it('Quotes snapshot test', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
