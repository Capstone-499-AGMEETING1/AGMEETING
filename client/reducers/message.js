import {ADD_MESSAGE, CLEAR_MESSAGES} from '../actions/types';

const messages = JSON.parse(localStorage.getItem('messages'));
const initialState = messages ? {messages: messages} : {messages: []};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case ADD_MESSAGE:
            return {messages: [...state.messages, payload]};
        case CLEAR_MESSAGES:
            return {messages: []};
        default:
            return state;
    }
}
