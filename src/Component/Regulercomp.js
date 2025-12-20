import React, { Component } from 'react';
//rcc
export default class Regulercomp extends Component {
  render() {
    console.log("Reguler component render called");
    
    return (
      <div>
        Regulercomp {this.props.name1}
      </div>
    );
  }
}
