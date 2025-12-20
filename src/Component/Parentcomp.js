import React, { Component } from 'react';
import Regulercomp from './Regulercomp';
import Purecopm from './Purecopm';
//rcc
export default class Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:" Dipak"
      }
    }
     componentDidMount(){
        setInterval(()=>{
            this.setState({name:" PSk Tech"})
        },2000)
     }
  render() {
    return (
      <div>
        <Regulercomp name1={this.state.name} />
        <Purecopm name1={this.state.name} />
      </div>
    );
  }
}
