import React, { Component } from 'react';

export default class HookClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} time`

    }
    componentDidUpdate() {
        document.title = `Clicked ${this.state.count} time`
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({count: this.state.count +1 })}>Click Me</button>
            </div>
        );
    }
}
