import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Components/Calculator';

it('calculator snapshot test', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
