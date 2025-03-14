import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../actions/types';

const user = JSON.parse(localStorage.getItem('currentUser'));
const initialState = user ? {authenticated: true, user} : {authenticated: false, user: null};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                authenticated: false
            };
        case REGISTER_FAIL:
            return{
                ...state,
                authenticated: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                user: payload
            };
        case LOGIN_FAIL:
            return {
                ...state,
                authenticated: false,
                user: null
            };
        case LOGOUT:
            return {
                ...state,
                authenticated: false,
                user: null
            };
        default:
            return state;
    }
}
