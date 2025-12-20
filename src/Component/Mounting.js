import React, { Component } from 'react';

export default class Mounting extends Component {
    constructor(props) {
        super(props)
console.log("constructor method called");

        this.state = {

        }
    }
    static getDerivedStatedFromProps(props, state) {
        console.log("getDerivedStatedFromProps Called")
        return null
    }
    componentDidMount() {
        console.log("componentDidMount Method Called");

    }

    render() {
        console.log("render method called");

        return (
            <div>
                Heyyyyy WellCome

            </div>
        );
    }
}




