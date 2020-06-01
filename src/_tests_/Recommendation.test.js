import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import Recommendation from '../components/layout/Recommendation';

afterEach(cleanup);

it("renders correctly", () => {
    shallow(<Recommendation />);
})