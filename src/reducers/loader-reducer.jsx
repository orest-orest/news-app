import initialState from './initial-state.jsx';
import {SHOW_LOADER} from '../actions/action-types.jsx';
import {HIDE_LOADER} from "../actions/action-types.jsx";

export default function loader(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER:
            return {...state, loading: false};
        default:
            return state;
        }

    }

