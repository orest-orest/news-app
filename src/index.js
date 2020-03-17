import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from "./components/App.js";
import configureStore from './store.jsx';
import {BrowserRouter} from 'react-router-dom'

const store = configureStore();

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);


render(app, document.getElementById("root"));
