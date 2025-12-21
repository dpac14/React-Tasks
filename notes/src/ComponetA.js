import React, { Component } from 'react';
import ComponetB from './ComponetB';

export default class ComponetA extends Component {
  render() {
    return (
      <div>
        <ComponetB/>
      </div>
    );
  }
}
