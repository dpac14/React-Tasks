import React, { Component } from 'react';

export default class Updatemount extends Component {
    constructor(props) {
      super(props)
      console.log("constructor method called");
      
    
      this.state = {
         name:"dipak"
      }
    }
    static getDerivedStateFromeProps(props,state){
        console.log("getDerivedStateFromeProps called")
        return null
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called");
        return true
    }
    chnagehere=()=>{
        this.setState({name:"Psk Tech"})
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate called");
        return null
    }
    componentDidUpdate(){
        console.log( "componentDidUpdate called");
        
    }
    
  render() {
    console.log("render method called");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input type='button' value="change" onClick={this.chnagehere}></input>
      </div>
    );
  }
}
