import {combineReducers} from 'redux';
import auth from './auth';
import messages from './message';

export default combineReducers({
    auth,
    messages
});
