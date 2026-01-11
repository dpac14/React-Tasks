import React, { Component } from 'react';

export default class ParentCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0

    }
  }
  clickhere = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));

  }
  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.clickhere)}
      </div>
    );
  }
}
