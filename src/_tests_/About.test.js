import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import About from '../components/layout/About';

afterEach(cleanup);

it("renders correctly", () => {
    shallow(<About />);
})