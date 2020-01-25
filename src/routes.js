import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Chat from './components/Chat/Chat'
import Home from './components/Home/Home'
import Info from './components/Info/Info'
import Login from './components/Login/Login'

export default (
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/chat' component={Chat} />
        <Route path='/info' component={Info} />
        <Route path='/home' component={Home} />
    </Switch>
)