import React, { Component } from 'react';
import './App.css';

import { HashRouter } from 'react-router-dom'

import Geekfinity from './components/Geekfinity'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Geekfinity/>
            </HashRouter>
        )
    }
}

export default App;
