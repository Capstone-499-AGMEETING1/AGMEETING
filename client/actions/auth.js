import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, ADD_MESSAGE} from './types';
import AuthService from '../services/auth.service';
import {toast} from "material-react-toastify";

export const register = (firstName, lastName, email, password, meetingId, isAdmin, isModerator) => (dispatch) => {
    return AuthService.register(firstName, lastName, email, password, meetingId, isAdmin, isModerator).then(() => {
        dispatch({type: REGISTER_SUCCESS});
        return Promise.resolve();
    }, (error) => {
        const message = error.response.data.message || 'There was an issue with registration.';
        dispatch({type: REGISTER_FAIL});
        toast.error(message);
        return Promise.reject();
    });
};

export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then((response) => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response
        });
    }, (error) => {
        const message = error.response.data.message || 'There was an issue logging in.';
        dispatch({type: LOGIN_FAIL});
        toast.error(message);
        return Promise.reject();
    });
};

export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({type: LOGOUT});
    return Promise.resolve();
};

