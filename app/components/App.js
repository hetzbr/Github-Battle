import React, { Component } from 'react';
const Popular = require('./Popular');

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Popular />
            </div>
        )
    }
}

module.exports = App;