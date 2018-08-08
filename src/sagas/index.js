
import { takeLatest } from 'redux-saga/effects';
import { loginUserAsync } from './users';
import { LOGIN_USER } from '../actions';

export default function* rootSaga() {
    yield [
        takeLatest(LOGIN_USER, loginUserAsync)
    ];
}
