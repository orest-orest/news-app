import * as types from './action-types.jsx';
import {hideLoader, showLoader} from "./loader-action.jsx";

const corsProxy = 'https://cors-anywhere.herokuapp.com/';

const RECEIVE_NEWS_URL = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=0ebfabb04162492590cc91a7665c3555';



function receiveNews(newsList) {

    return {type: types.RECEIVE_NEWS_LIST, newsList: newsList};
}



export const fetchNews = () => {
    console.log('here')
    return async dispatch => {
        dispatch(showLoader());
        const req = new Request(corsProxy + RECEIVE_NEWS_URL);
        let json = await fetch(corsProxy + RECEIVE_NEWS_URL).then(response => response.json());
        dispatch(receiveNews(json.articles));
        dispatch(hideLoader());
    };
};


