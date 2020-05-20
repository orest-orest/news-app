import React, {Component} from 'react';

import { Route, Redirect, Link } from 'react-router-dom';
import {connect} from "react-redux";
import {loginExit} from "../actions/profile-action.jsx";


 class Profile extends React.Component {
     constructor(props) {
         super(props);

         this.logOut =
             this.logOut.bind(this);
     };


    logOut(event)  {
        event.preventDefault();

        console.log(this.props.user);

        this.props.loginExit();

    }

    render () {console.log(this.props.user.isOpen);

        return (

                this.props.user.isOpen ?
                    <div>
                        <p>You logged in</p>
                        <Link to='/' >
                        <button onClick={this.logOut}>Exit</button>
                        </Link>
                    </div>
                    : <Redirect to="/Login" />
            )}

}

const mapStateToProps = state => ({
    ...state.reduceLogin
});

const mapDispatchToProps = {
    loginExit
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
