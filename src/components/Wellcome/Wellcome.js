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

    handleOnFocus = (event) => {
        this.refs.underline.classList.toggle('active')
    }

    handleOnKeyPress = (event) => {
        if (event.key.toLowerCase() === 'enter' && event.target.value) {
            const what = event.target.value

            if (this.state.name === '') {
                this.setState({ name: what })

                event.target.value = ''
                this.refs.label.innerHTML = "user:"
                event.target.placeholder = 'what\'s your github\'s user?'
            }
            else if (this.state.username === '') {
                this.setState({ username: what }, () => {
                    this.props.onSaveConfig(this.state)
                })

                event.target.placeholder = 'updating...'
                event.target.value = ''
            }

            console.log('3-name: ' + this.state.name, '3-username: ' + this.state.username, ' -> setState (after)')
        }
    }

    render() {
        return (
            <section className="wellcome">
                {/* { this.renderWellcome() } */}
                <label ref="label" style={ { color: this.props.foreColor } } htmlFor="inputNames">name:</label>
                <input 
                    onKeyPress = { this.handleOnKeyPress }
                    onFocus = { this.handleOnFocus }
                    onBlur = { this.handleOnFocus }
                    style = { { color: this.props.foreColor} }
                    id="inputNames"
                    placeholder="what's your name?" type="text"/>
                <span ref="underline" className="input-underline"></span>
            </section>
        )
    }
}

export default Wellcome