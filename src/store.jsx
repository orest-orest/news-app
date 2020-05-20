import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer.jsx';

import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {

    const middlewares = [ReduxThunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);


    const store = createStore(rootReducer, initialState, composedEnhancers);

    return store
}
