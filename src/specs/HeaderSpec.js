import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('<Header />', () => {
  test('Should render correctly', () => {
    // eslint-disable-next-line
    const component = renderer.create(
      // eslint-disable-next-line
      <BrowserRouter><Header /></BrowserRouter>);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
