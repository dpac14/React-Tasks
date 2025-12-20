import React, { Component } from 'react';
import InputDemo from './InputDemo';

export default class ButtonDemo extends Component {
 constructor(props) {
   super(props)
   this.buttonRef=React.createRef();
   
 }
 
 clickhere=()=>
 {
    this.buttonRef.current.focusInput();
 }
    render() {
    return (
      <div>
        <InputDemo ref={this.buttonRef} />
        <button onClick={this.clickhere}>Click me</button>
      </div>
    );
  }
}
