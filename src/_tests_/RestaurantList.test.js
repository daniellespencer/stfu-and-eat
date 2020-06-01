import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import RestaurantList from '../components/layout/RestaurantList';

afterEach(cleanup);

it("renders correctly", () => {
    shallow(<RestaurantList />);
})

describe("Input value", () => {
    it("updates on change", () => {
        const { queryByPlaceholderText } = render(<RestaurantList />)

        const searchInput = queryByPlaceholderText('Search our list of restaurants ...');

        fireEvent.change(searchInput, {target: {value: "test"}})

        expect(searchInput.value).toBe("test")
    })
})