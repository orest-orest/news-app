import React, {Component} from 'react';
import Profile from "./Profile";
import { Route, Redirect } from 'react-router-dom';
import { user } from './App';





export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {login: '', password: '', isOpen: false},
        };
        this.handleChangeLogin =
            this.handleChangeLogin.bind(this);
        this.handleChangePassword =
            this.handleChangePassword.bind(this);

        this.handleLogin =
            this.handleLogin.bind(this);
    };

    handleChangeLogin (event) {
        this.setState ({
            login:
            event.target.value,
        })};

    handleChangePassword (event) {
        this.setState ({
            password:
                event.target.value,
            }
        ); }

    handleLogin (event) {

        event.preventDefault();



        if (this.state.login === user.login) {
          if (this.state.password === user.password) {
              this.setState(state => ({
                  isOpen: state.users.isOpen = true
              }));
              user.isOpen = true;

              console.log(user.isOpen);
              console.log(this.state.users.isOpen);
          }
        }


        //console.log(this.state.users.length);    // console.log(this.state.login) видит поле логина, не стирать!!!

    }


    render() {

        return(
            <div  class="container-fluid">
                <form class="container"  onSubmit = {this.handleSubmit}>
                    <label>
                        login
                        <input class="container form-control" type='text'
                               value={this.state.login}
                               onChange = {this.handleChangeLogin}
                        ></input>
                    </label>
                    <label>
                        password
                        <input class="container form-control" type='password'
                               value={this.state.password}
                               onChange = {this.handleChangePassword}
                        ></input>
                    </label>

                </form>
                <form class="container" onClick = {this.handleLogin}>
                    <div>
                        <button>вход</button>
                    </div>
                </form>

                {this.state.users.isOpen ? <Redirect to= '/Profile' /> : 'Enter password'}


            </div>
        )
    }
}