import {combineReducers} from 'redux';
import newsReducer from './news-reducer.jsx';
import reduceLogin from './profile-reducer.jsx';
import loader from './loader-reducer.jsx'

const rootReducer = combineReducers({
    newsReducer,
    reduceLogin,
    loader
});

export default rootReducer;