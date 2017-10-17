import React, { Component } from 'react';
import './Time.css'

class Time extends Component {

    constructor() {
        super()

        this.state ={
            time: ''
        }
    }

    componentDidMount() {
        // console.log(
        //         ("0" + myTime.getHours()).slice(-2)   + " " + 
        //         ("0" + myTime.getMinutes()).slice(-2))
        setInterval( () => {
            const myTime = new Date()
            const hours = ("0" + myTime.getHours()).slice(-2)
            const minutes = ("0" + myTime.getMinutes()).slice(-2)
            const seconds = myTime.getSeconds()
            //console.log(seconds)
            const time = hours + (seconds%2 ? ':' : ' ') + minutes

            this.setState({time})
        },1000)
     } 

    render() {
        return (
            <section className="time" style={{ color: this.props.foreColor, backGround: this.props.backColor }}>
                <p>{this.state.time}</p>
                <p className="welcome">May the Force be with you, Ricardo. </p>
            </section>
        )
    }
}

export default Time