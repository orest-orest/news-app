import React, {Component} from "react";
import {Route, Switch, Link} from 'react-router-dom';
import Login from './Login';
import News from './News';
import Profile from './Profile';
import Home from './Home'

class App extends React.Component {

    render() {
        return (

            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <ul class="nav nav-inline">
                        <li class="nav-item active"><Link class="nav-link" to='/'>Home page</Link></li>

                        <li class="nav-item "><Link class="nav-link" to='/News'>News</Link></li>
                        <li class="nav-item "><Link class="nav-link" to='/Profile'>Profile</Link></li>

                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/Login' component={Login}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Profile' component={Profile}/>

                </Switch>
            </div>
        )


    }
}

export default App;



