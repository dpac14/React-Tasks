import React, { Component } from 'react';

export default class ClickCounter extends Component {

  
    render() {
        const{count,clickhere}=this.props;
    return (
      <div>
        
        <button onClick={clickhere}>Clicked {count} Time</button>
      </div>
    );

  }
}
