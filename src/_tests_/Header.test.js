import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';



import ReactDOM from 'react-dom';

import Header from '../components/layout/Header';
import { AuthContext, AuthProvider } from "../components/auth/context/authContext";

describe("Header", () => {
    beforeEach(() => {
        jest.useFakeTimers();
      });
      afterEach(() => {
        jest.clearAllTimers();
        
      });
    
    it("Renders Header Component", () =>{
        const {isAuthenticated} = true
        const headerComponent = renderer.create(<MemoryRouter><Header value={isAuthenticated}  /></MemoryRouter>)

        expect(headerComponent.toJSON()).toMatchSnapshot()

        screen.debug()


    })
})
