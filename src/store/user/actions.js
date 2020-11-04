import {
    GET_LOGGED_IN_USER,
    GET_LOGGED_IN_USER_SUCCESS,
    GET_LOGGED_IN_USER_FAIL,
    LOG_IN,
    LOG_IN_SUCCESS,
    LOG_IN_FAIL
} from "./types";

export const logIn = (payload) => ({ type: LOG_IN, payload });
export const logInSuccessful = (payload) => ({
    type: LOG_IN_SUCCESS,
    payload,
});
export const loginFail = () => ({ type: LOG_IN_FAIL });

export const getLoggedInUser = (payload) => ({
    type: GET_LOGGED_IN_USER,
    payload,
});
export const getLoggedInUserSuccessful = (payload) => ({
    type: GET_LOGGED_IN_USER_SUCCESS,
    payload,
});
export const getLoggedInUserFail = () => ({ type: GET_LOGGED_IN_USER_FAIL });
