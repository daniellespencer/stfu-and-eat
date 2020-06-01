import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import RandomGenerator from '../components/layout/RandomGenerator';

afterEach(cleanup);

it("renders correctly", () => {
    shallow(<RandomGenerator />);
})