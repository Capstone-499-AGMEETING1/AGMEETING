import {ADD_MESSAGE, CLEAR_MESSAGES} from './types';
import MessageService from "../services/message.service";

export const addMessage = (msg, date) => (dispatch) => {
    MessageService.addMessage(msg, date);
    dispatch({
        type: ADD_MESSAGE,
        payload: {
            message: msg,
            date: date
        }
    });
};

export const clearMessages = () => (dispatch) => {
    MessageService.clearMessages();
    dispatch({
        type: CLEAR_MESSAGES
    });
};
