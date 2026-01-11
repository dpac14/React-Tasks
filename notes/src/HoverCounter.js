import React, { Component } from 'react';

export default class HoverCounter extends Component {


  render() {
    const { count, clickhere } = this.props;
    return (
      <div>
        <button onMouseOver={clickhere}>Clicked {count} Time</button>
      </div>
    );
  }
}

