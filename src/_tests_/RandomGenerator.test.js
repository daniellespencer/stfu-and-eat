import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer, { act } from "react-test-renderer";
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import RandomGenerator from '../components/layout/RandomGenerator';

afterEach(cleanup);

it("renders correctly", () => {
    shallow(<RandomGenerator />);
})