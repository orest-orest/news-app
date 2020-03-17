import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {fetchNews} from "../actions/sample-action.jsx";

class News extends Component {

    componentDidMount() {
        this.props.actions.fetchNews()
    }

    render() {

        let newsElements = [];
        this.props.newsList.forEach(news => newsElements.push(
            <ul class="container">
                Author : {news.author}
                <h5>Title : {news.title}</h5>
                <p>Description : {news.description}</p>
                <p>{news.content}</p>
            </ul>
        ));

        console.log("Going to show news page");
        console.log(this.state);
        return (
            <div>
                <h1 class="container-fluid text-center">News</h1>
                {newsElements}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    ...state.SampleReducer
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({fetchNews: fetchNews}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
