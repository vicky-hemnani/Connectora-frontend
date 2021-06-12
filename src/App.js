import React from 'react'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route path="/Regiter">
                    
                </Route>
            </Switch>
        </Router>
    )
}
