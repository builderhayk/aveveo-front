import * as userAction from "./types";

const initialState = {
    userData: {},
    userLogInLoading: false,
    logInError: null
}
const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case userAction.LOG_IN:
            return {
                ...state,
                logInError: null,
                userLogInLoading: true,
            };
        case userAction.LOG_IN_SUCCESS:
            return {
                ...state,
                userData: payload.user,
                userLogInLoading: false,
            };
        case userAction.LOG_IN_FAIL:
            return {
                ...state,
                logInError: payload.error,
                userLogInLoading: false,
            };
    }
};
