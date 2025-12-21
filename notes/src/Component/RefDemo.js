import React, { Component } from 'react';
//rcc    
export default class RefDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputref=React.createRef(); //current ref
      this.inputref2=null; // call back ref
      this.setinputref=(element)=>{
        this.inputref2=element;  
      }

    }
    componentDidMount(){
      if(this.inputref2){
        this.inputref2.focus();
      }
        // this.inputref.current.focus();
    }
    clickhere=()=>{
      alert(this.inputref.current.value)
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputref}/>
        <input type='text' ref={this.setinputref}/>
        <button onClick={this.clickhere}>Click me</button>
      </div>
    );
  }
}
