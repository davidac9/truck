import React, { Component } from 'react'
import User from '../User/User'
import Match from '../Match/Match'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    Home here
                </div>
                <div>
                    <User/>
                    <Match/>
                </div>
            </div>
        )
    }
}