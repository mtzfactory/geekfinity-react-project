import React, { Component } from 'react';
import './Time.css'

class Time extends Component {

    constructor() {
        super()

        this.state ={
            time: '',
        }
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
            time : new Date().toLocaleString()
            })
        },1000)
     } 

    render() {
        return (
            <section style={{ color: this.props.foreColor, backGround: this.props.backColor }}>
                <p>{this.state.time}</p>
            </section>
        )
    }
}

export default Time