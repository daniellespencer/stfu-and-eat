import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

afterEach(cleanup);

it('renders without crashing', () => {
  shallow(<App />);
});

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
});

// it('renders welcome message', () => {
//   const wrapper = shallow(<App />);
//   const welcome = <h1>STFU & EAT</h1>;
//   // expect(wrapper.contains(welcome)).toBe(true);
//   expect(wrapper.contains(welcome)).toEqual(true);
// });

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('STFU & EAT')).toBeInTheDocument();
});
