import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';

export default (
    <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={Contact} path='/contact'/>
        <Route component={Login} path='/login'/>
        <Route component={Shop} path='Shop'/>
    </Switch>
)