import React, {Component} from 'react';

var url = 'http://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=0ebfabb04162492590cc91a7665c3555';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    });



export default class Home extends React.Component {
    render() {
        return <p class="container">Home page</p>
    }
}