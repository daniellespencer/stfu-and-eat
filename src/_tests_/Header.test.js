import React from 'react';
import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import { StateMock } from '@react-mock/state';


import ReactDOM from 'react-dom';

import Header from '../components/layout/Header';
import { AuthContext } from "../components/auth/context/authContext";

describe("Header", () => {
    beforeEach(() => {
        jest.useFakeTimers();
      });
      afterEach(() => {
        jest.clearAllTimers();
        
      });
    
    it("Renders Header", () =>{
        
        render(<StateMock state = {{ isAuthenticated: true }}><Header /></StateMock>)

        screen.debug()
    })
})
