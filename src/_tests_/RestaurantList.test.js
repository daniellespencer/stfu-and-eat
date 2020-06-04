import React from 'react';
import { render, cleanup, fireEvent,  } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';

import RestaurantList from '../components/layout/RestaurantList';
export const flushPromises = () => new Promise(setImmediate)
const restaurant1 = {
    "address": "2901 Salena St, St. Louis, MO 63118",
    "cuisine": "American",
    "id": "5ec1878e67e5bfad7604154f",
    "name": "Benton Park Cafe",
    "neighborhood": "Benton Park",
    "website": "http://www.bentonparkcafe.com/"
  }
  const restaurant2 = {
    "address": "2301 Cherokee St, St. Louis, MO 63118",
    "cuisine": "Asian Fusion",
    "id": "5ec1904267e5bfad76041550",
    "name": "Kalbi Taco Shack",
    "neighborhood": "Benton Park",
    "website": "http://www.kalbitacoshack.com"
  }
  

describe("RestaurantList", () => {
    beforeEach(() => {jest.useFakeTimers()})
    afterEach(() => {
        jest.clearAllTimers()
        cleanup()
    });
    // Set up
    
    // execution

    // assertion
    it("renders multiple restaurants", async () => {
        fetch.mockResponse(JSON.stringify({result: [
         restaurant1, restaurant2
        ]}))
        let restaurantComponent

        await act( async () => {
            restaurantComponent = renderer.create(<RestaurantList />)
            await flushPromises()
        });
        

        expect(restaurantComponent.toJSON()).toMatchSnapshot()
    });

    it("renders no restaurants", async () => {
        fetch.mockResponse(JSON.stringify({result: []}))
        let restaurantComponent

        await act( async () => {
            restaurantComponent = renderer.create(<RestaurantList />)
            await flushPromises()
        });
        

        expect(restaurantComponent.toJSON()).toMatchSnapshot()
    });
    
    it("displays restaurants that match search string", async () => {
        fetch.mockResponse(JSON.stringify({result: [
            restaurant1, restaurant2
           ]}))
        const restaurantList = mount(<RestaurantList />)
        await flushPromises()
        jest.runAllTimers()   
        
        
        restaurantList.update()
        console.log(restaurantList.debug())


    })

    it("ignore the case on a search string", () => {
        
    })

    it("does not display any restaurants if there isn't one that matches ", () => {
        
    })
})