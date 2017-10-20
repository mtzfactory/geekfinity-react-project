import React, { Component } from 'react';

export default function withInterval(WrappedComponent) {
    return class EnhancedComponent extends Component {

        constructor() {
            super()

            this.timerId = 0
            
            this.state = {
                timestamp: 0
            }
        }

        componentDidMount() {
            this.timerId = setInterval(() => {
                this.setState({ timestamp: Date.now() })
            }, this.props.interval * 1000)
        }

        componentWillUnmount() {
            clearInterval(this.timerId);
        }

        render() {
          const newProps = {
            timestamp: this.state.timestamp
          }

          return <WrappedComponent {...this.props} {...newProps}/>
        }
      }
}
