import React, { Component } from 'react';
import ComponetC from './ComponetC';

export default class ComponetB extends Component {
  render() {
    return (
      <div>
        <ComponetC />
      </div>
    );
  }
}
