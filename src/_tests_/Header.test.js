import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import * as authContext from "../components/auth/context/authContext";
import Header from '../components/layout/Header';


import ReactDOM from 'react-dom';

jest.mock("../components/auth/context/authContext")


describe("Header", () => {
    beforeEach(() => {
        jest.useFakeTimers();
      });
      afterEach(() => {
        jest.clearAllTimers();
        
      });
    
    it("Renders Header with user links when authenticated", () =>{
        authContext.useAuthContext.mockReturnValue({isAuthenticated: true, logout: jest.fn()})
        const headerComponent = renderer.create(<MemoryRouter><Header /></MemoryRouter>)

        expect(headerComponent.toJSON()).toMatchSnapshot()
    })

    it("Renders Header with user links when unauthenticated", () =>{
        authContext.useAuthContext.mockReturnValue({isAuthenticated: false, logout: jest.fn()})
        const headerComponent = renderer.create(<MemoryRouter><Header /></MemoryRouter>)

        expect(headerComponent.toJSON()).toMatchSnapshot()
    })
})
