import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  test('renders without crashing', () => {
    let component = shallow(<App />);
    expect(component.find('img').length).toEqual(1);
    expect(component.find('img').prop('src')).toEqual('logo.svg');
  });
});
