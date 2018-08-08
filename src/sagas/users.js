import { select, put, call } from 'redux-saga/effects';
import { getAuth, getUsers } from './selectors';
import { loginSuccessAction, loginFailureAction, registerSuccessAction, registerFailureAction } from '../actions';
import { login } from './apis';
import 'whatwg-fetch';

export function* loginUserAsync() {
    // 获取Store state 上的数据
    const auth = yield select(getAuth);
    const user = auth.get('user');
    // 发起 ajax 请求
    const json = yield call(login.bind(this, user), 'login');
    if (json.success) {
        localStorage.setItem('token', json.data);
        // 发起 loginSuccessAction

        //redux-saga 处理 side effect
        yield put(loginSuccessAction(json.data));
    } else {
        // 发起 loginFailureAction
        yield put(loginFailureAction(json.error));
    }
}