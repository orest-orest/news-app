import React, {Component} from 'react';
import { user } from './App';
import { Route, Redirect, Link } from 'react-router-dom';



export default class Profile extends React.Component {

    logOut () {

        user.isOpen = false;
        console.log(user.isOpen);


    }

    render () {console.log(user.isOpen);
        return (

                user.isOpen ?
                    <div>
                        <p>You logged in</p>
                        <Link to='/' >
                        <button onClick={this.logOut}>Exit</button>
                        </Link>
                    </div>
                    : <Redirect to="/Login" />
            )}

}

