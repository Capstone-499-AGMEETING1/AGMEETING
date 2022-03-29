import {ADD_MESSAGE, CLEAR_MESSAGES} from './types';
import MessageService from "../services/message.service";

export const addMessage = (msg) => (dispatch) => {
    MessageService.addMessage(msg);
    dispatch({
        type: ADD_MESSAGE,
        payload: msg
    });
};

export const clearMessages = () => (dispatch) => {
    MessageService.clearMessages();
    dispatch({
        type: CLEAR_MESSAGES
    });
};
