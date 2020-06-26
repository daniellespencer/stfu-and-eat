import React from 'react';
import AuthState, {useAuthContext} from '../components/auth/context/authContext';
import {mount} from "enzyme";
import axios from "axios";
import setAuthToken from "../components/auth/setAuthToken";
jest.mock("../components/auth/setAuthToken")
jest.mock("axios")
/**
 * @returns currentContext, refetchContext() if an update happens
 */
const getAuthContext = () => {
    let authContext
    const TestAction = () => {
        authContext = useAuthContext()
        return null
    }
    const component = mount(
        <AuthState>
            <TestAction/>
        </AuthState>,
    )
    return [authContext, () => {
        component.update()
        return authContext
    }]
}
describe("authContext", () => {
    it("sets the proper initial state for the context", () => {
        const defaultToken = "some token"
        Storage.prototype.getItem = jest.fn(() => defaultToken);
        const [authContext] = getAuthContext()
        expect(authContext.token).toEqual(defaultToken)
        expect(authContext.isAuthenticated).toEqual(false)
        expect(authContext.loading).toEqual(true)
        expect(authContext.user).toBeNull()
        expect(authContext.error).toBeNull()
    })
    describe("register", () => {
        it("calls api, registers user, logs in the user", async () => {
            Storage.prototype.getItem = jest.fn(() => undefined);
            Storage.prototype.setItem = jest.fn();
            const loginResponse = {token: "fetchedToken"}
            const registerResponse = {}
            axios.post.mockImplementation((url) => {
                if (url === "/api/user-login") return {data: loginResponse}
                return {data: registerResponse}
            })
            const formData = {userName: 'user1'}
            const [authContext, refetchContext] = getAuthContext()
            await authContext.login(formData)
            const refetchedContext = refetchContext()
            expect(refetchedContext.token).toEqual(loginResponse.token)
            expect(refetchedContext.isAuthenticated).toEqual(true)
            expect(refetchedContext.loading).toEqual(false)
            expect(setAuthToken).toBeCalledTimes(0)
            expect(Storage.prototype.setItem).toBeCalledTimes(1)
            expect(Storage.prototype.setItem).toHaveBeenNthCalledWith(1, "token", loginResponse.token)
        })
    })
})