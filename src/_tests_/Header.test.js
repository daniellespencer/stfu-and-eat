import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import Header from '../components/layout/Header';

afterEach(cleanup);

it("renders correctly", () => {
    shallow(<Header />);
})