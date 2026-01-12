import React, { Component } from 'react';
import { ContextConsumer } from './ContextDemo';

export default class ComponetC extends Component {
  render() {
    return (
      <div>
        <ContextConsumer>
          {value => {
            return <h1>Name: {value}</h1>
          }}
        </ContextConsumer>
      </div>
    );
  }
}
