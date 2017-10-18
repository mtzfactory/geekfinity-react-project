import React, { Component } from 'react'
import './Wellcome.css'

class Wellcome extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            gitUser: ''
        }
    }

    updateLocalStorage() {
        if (typeof(Storage) !== "undefined") {
            localStorage['geekfinity.config'] = JSON.stringify(this.state)
        }
    }

    handleOnKeyPress = (event) =>  {
        if (event.key.toLowerCase() === 'enter' && event.target.value) {
            if (this.state.name === '') {
                this.setState({name: event.target.value})
            }
            else if (this.state.gitUser === '') {
                this.setState({gitUser: event.target.value})
            }
        }
    }



    render() {
        return (
            
        )
    }
}

export default Wellcome