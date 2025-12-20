import React, { Component } from 'react';
import FRinput from './FRinput';

export default class FRbutton extends Component {
  constructor(props) {
     super(props)
     this.buttonRef=React.createRef();
     
   }
   
   clickhere=()=>
   {
      this.buttonRef.current.focus();
   }
      render() {
      return (
        <div>
            <FRinput ref={this.buttonRef}  />
          <button onClick={this.clickhere}>Click me</button>
        </div>
      );
    }
  }
  
