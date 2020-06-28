import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import About from '../components/layout/About';

describe("About", () => {
    it("renders correctly", () => {
        render(<About />);

        expect(screen.getByText("About Our App")).toBeInTheDocument();
    })
})

