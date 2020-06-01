import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import RecommendationItem from '../components/layout/RecommendationItem';

afterEach(cleanup);

it("renders correctly", () => {
    const restaurant = jest.fn();
    shallow(<RecommendationItem restaurant={restaurant} />);
})