import * as types from './action-types.jsx';
import {hideLoader, showLoader} from "./loader-action.jsx";

const RECEIVE_NEWS_URL = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    '0ebfabb04162492590cc91a7665c3555';

function receiveNews(newsList) {
    return {type: types.RECEIVE_NEWS_LIST, newsList: newsList};
}

export const fetchNews = () => {
    return async dispatch => {
        dispatch(showLoader());
        const req = new Request(RECEIVE_NEWS_URL);
        let json = await fetch(RECEIVE_NEWS_URL).then(response => response.json());
        dispatch(receiveNews(json.articles));
        dispatch(hideLoader());
    };
};


