import React, { Component } from 'react'
import './Wellcome.css'

class Wellcome extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            username: ''
        }
    }

    updateLocalStorage() {
        if (typeof(Storage) !== "undefined") {
            localStorage['geekfinity.config'] = JSON.stringify(this.state)
        }
    }

    handleOnKeyPressName = (event) =>  {
        if (event.key.toLowerCase() === 'enter' && event.target.value) {
            this.setState({ name: event.target.value })
        }
    }

    handleOnKeyPressUsername = (event) =>  {
        if (event.key.toLowerCase() === 'enter' && event.target.value) {
            this.setState({ username: event.target.value })
        }
    }

    render() {
        return (
            <section className="wellcome">
                <input onKeyPress={ this.handleOnKeyPressName } placeholder="what's your name?" type="text"/>
                <input onKeyPress={ this.handleOnKeyPressUsername } placeholder="what's your github's user?" type="text"/>
            </section>
        )
    }
}

export default Wellcome