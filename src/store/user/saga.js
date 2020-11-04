import {put, all, call, fork, takeEvery} from "redux-saga/effects";
import {LOG_IN} from "./types";

function* logIn(payload) {
    try {
        // const response = yield call(
        //     axiosCall, payload.userData
        // );
        //success
    }catch(e) {
        //error
    }
}
function* watchLogIn() {
    yield takeEvery(LOG_IN, logIn);
}

export default function* rootSaga() {
    yield all([fork(watchLogIn)]);
}
