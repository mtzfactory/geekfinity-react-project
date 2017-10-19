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

    handleOnKeyPress = (event) => {
        if (event.key.toLowerCase() === 'enter' && event.target.value) {
            const what = event.target.value

            if (this.state.name === '') {
                this.setState({ name: what })

                event.target.value = ''
                //this.refs.label.innerHTML = "What is your Github user?"
                event.target.placeholder = 'Your Github username here'
            }
            else if (this.state.username === '') {
                this.setState({ username: what }, () => {
                    this.props.onSaveConfig(this.state)
                })

                event.target.placeholder = 'updating...'
                event.target.value = ''

            }
           
        }
    }

    render() {
        return (
            <section className="wellcome">
              
                <label ref="label" style={ { color: this.props.foreColor } } htmlFor="inputNames">May the Force be with you, {this.props.name}</label>
                { (this.props.name === '' || this.props.username === '') && 
                    <input 
                        onKeyPress = { this.handleOnKeyPress }
                        style = { { color: this.props.foreColor} }
                        id="inputNames"
                        placeholder="Your name here." type="text"
                        className="input-underline" />
                } 

            </section>
        )
    }
}

export default Wellcome