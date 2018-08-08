import merge from 'lodash/merge';
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../actions';

const initialState = { user: null, error: null, token: null }

export const user = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN_USER:
            return merge({
                'user': action.data,
                'error': null,
                'token': null,
            }, state);
        case LOGIN_USER_SUCCESS:
            return merge({
                'token': action.data,
                'error': null
            }, state);
        case LOGIN_USER_FAILURE:
            return merge({
                'token': null,
                'error': action.data
            }, state);
        default:
            return state
    }
};