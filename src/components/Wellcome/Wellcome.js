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

    // handleOnKeyPressName = (event) =>  {
    //     if (event.key.toLowerCase() === 'enter' && event.target.value) {
    //         this.setState({ name: event.target.value })
    //     }
    // }

    // handleOnKeyPressUsername = (event) =>  {
    //     if (event.key.toLowerCase() === 'enter' && event.target.value) {
    //         this.setState({ username: event.target.value })
    //         // this.props.onUpdate(this.state)
    //     }
    // }

    // renderWellcome() {
    //     if (this.state.name === '')
    //         return <input onKeyPress={ this.handleOnKeyPressName } placeholder="what's your name?" type="text"/>
    //     else if (this.state.username === '')
    //         return <input onKeyPress={ this.handleOnKeyPressUsername } placeholder="what's your github's user?" type="text"/>
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('4-name: ' + nextState.name, '4-username: ' + nextState.username, ' -> componentWillUpdate')
    }

    handleOnFocus = (event) => {
        this.refs.underline.classList.toggle('active')
    }

    handleOnKeyPress = (event) => {
        if (event.key.toLowerCase() === 'enter' && event.target.value) {
            if (this.state.name === '') {
                this.setState({ name: event.target.value }, () => {
                    console.log('1-name: ' + this.state.name, '1-username: ' + this.state.username, ' -> setState (name)')
                })

                event.target.value = ''
                this.refs.label.value = "username:"
                event.target.placeholder = 'what\'s your github\'s user?'
            }
            else if (this.state.username === '') {

                this.setState({ username: event.target.value }, () => {
                    console.log('2-name: ' + this.state.name, '2-username: ' + this.state.username, ' -> setState (username)')
                })

                // this.setState({
                //     username: event.target.value
                // })

                this.props.onUpdate(this.state)

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