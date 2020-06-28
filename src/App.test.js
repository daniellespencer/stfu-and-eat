import React from 'react';
import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe("App Test", () => {
  
  it("App renders", () =>{
    render(<MemoryRouter><App /></MemoryRouter>)
  })
})



it('renders without crashing', () => {
  shallow(<App />);
});



// it('renders welcome message', () => {
//   const wrapper = shallow(<App />);
//   const welcome = <h1>STFU & EAT</h1>;
//   // expect(wrapper.contains(welcome)).toBe(true);
//   expect(wrapper.contains(welcome)).toEqual(true);
// });


