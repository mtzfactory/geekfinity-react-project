import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import './App.css';

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
