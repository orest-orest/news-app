import React, {Component} from 'react';

import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginVerification} from "../actions/profile-action.jsx";

import {bindActionCreators} from "redux";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: 'admin',
            password: '12345'
        };
    };

    handleChangeLogin = event => {
        this.setState({
            login:
            event.target.value,
        })
    };

    handleChangePassword = event => {
        this.setState({
                password:
                event.target.value,
            }
        );
    };

    handleLogin = event => {
        event.preventDefault();
        console.log(this.props.user);
        if (this.state.login === this.props.user.login) {
            if (this.state.password === this.props.user.password) {
                this.props.loginVerification()
             }}
        };

 render() {
        return (
            <div class="container pt-3 col-2">
                <form>
                    <div class="form-group">
                        <label>
                            login
                            <input class="form-control" type='text'
                                   value={this.state.login}
                                   onChange={this.handleChangeLogin}
                            ></input>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            password
                            <input class="form-control" type='password'
                                   value={this.state.password}
                                   onChange={this.handleChangePassword}
                            ></input>
                        </label>
                    </div>
                    <div>
                        <button type="submit"
                                onClick={this.handleLogin}>вход
                        </button>
                    </div>

                </form>

                {this.props.user.isOpen ? <Redirect to='/Profile' /> : 'Enter password'}


            </div>
        )
    }
}



const mapStateToProps = state => ({
    ...state.reduceLogin
});

// const mapDispatchToProps = dispatch => ({
//     loginVerification,
//     dispatch
// });

const mapDispatchToProps = {
    loginVerification
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);