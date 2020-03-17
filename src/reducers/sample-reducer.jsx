import initialState from './initial-state.jsx';
import { RECEIVE_NEWS_LIST} from '../actions/action-types.jsx';
export default function reduce(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_NEWS_LIST:
            return Object.assign({}, state, { newsList: action.newsList});
        default:
            return state;
    }
}