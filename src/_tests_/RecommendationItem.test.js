import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';

import RecommendationItem from '../components/layout/RecommendationItem';
export const flushPromises = () => new Promise(setImmediate)
const restaurant = {
    "address": "2901 Salena St, St. Louis, MO 63118",
    "cuisine": "American",
    "id": "5ec1878e67e5bfad7604154f",
    "name": "Benton Park Cafe",
    "neighborhood": "Benton Park",
    "website": "http://www.bentonparkcafe.com/"
  }

describe("RecommendationItem", () => {
    beforeEach(() => {jest.useFakeTimers()})
    afterEach(() => {
        jest.clearAllTimers()
        cleanup()
    });
    // Set up
    
    // execution

    // assertion
    it("renders restaurant recommendation", async () => {
        fetch.mockResponse(JSON.stringify({result: [
         restaurant
        ]}))
        let restaurantRecommendation

        await act( async () => {
            restaurantRecommendation = renderer.create(<RecommendationItem restaurant={restaurant} />)
            await flushPromises()
        });
        

        expect(restaurantRecommendation.toJSON()).toMatchSnapshot()
    });
})    