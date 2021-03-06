import React, { Component } from 'react'
import fire from './config/Fire'
import Login from './Login';
import SignUp from './Signup'
import MainHome from './HomeMain'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import homeSidebar from './HomeSidebar'
import adminSidebar from './adminSidebar'

export default class Main extends Component {
    logOutHandle = () =>{
        fire.auth().signOut();
    }
    
    render() {
        return (
            
                <Router>
                  
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route path="/sign-in" component={Login} />
                            <Route path="/sign-up" component={SignUp} />
                            <Route path="/sidebar" component={homeSidebar} />
                            <Route path="/admin" component={adminSidebar} />
                        </Switch>
                       
                </Router>
            
        )
    }
}
