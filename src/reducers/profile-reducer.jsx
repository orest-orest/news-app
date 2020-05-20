import initialState from './initial-state.jsx';
import { ENTER_TO_PROFILE_TRUE} from '../actions/action-types.jsx';
import { EXIT_THE_PROFILE } from '../actions/action-types.jsx'

export default function reduceLogin(state = initialState, action) {
    switch (action.type) {
        case ENTER_TO_PROFILE_TRUE:
            return {...state, user: {
                        login: 'admin',
                        password: '12345',
                        isOpen: true
                    } } ;
        case EXIT_THE_PROFILE:
            return {...state, user: {
                    login: 'admin',
                    password: '12345',
                    isOpen: false
                }
            };
        default:
            return state;
    }
}

