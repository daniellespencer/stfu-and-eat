import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer, { act } from "react-test-renderer";
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';

import RandomGenerator from '../components/layout/RandomGenerator';

describe("RandomGenerator", () => {
    
    it("renders correctly", () => {
        render(<MemoryRouter><RandomGenerator /></MemoryRouter>);

        expect(screen.getByText("LET'S EAT")).toBeInTheDocument();
    })

})

