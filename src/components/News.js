import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNews} from "../actions/news-action.jsx";
import {Loader} from './loader.js'


class News extends Component {

    componentDidMount() {
        this.props.fetchNews();
    }


    render() {


        let newsElements = [];
        this.props.newsList.forEach(news => newsElements.push(
            <div class="container">
                <ul class="list-group">
                    <li class="col-6 list-group-item">
                        <h5>Title : {news.title}</h5>
                        <img className="container-fluid " src={news.urlToImage} width="auto" height="auto"/>
                        <p>{news.description}</p>
                    </li>
                </ul>
            </div>
        ));


        return (
            <div>
                <h1 class="container-fluid text-center">News</h1>
                <Loader/>
                {newsElements}

            </div>
        )
    }

}

const mapStateToProps = state => ({
    ...state.newsReducer
});

const mapDispatchToProps = {
    fetchNews,

};

export default connect(mapStateToProps, mapDispatchToProps)(News);
