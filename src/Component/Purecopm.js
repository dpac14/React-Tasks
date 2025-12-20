import React, { PureComponent } from 'react';
//rpce
export class Purecopm extends PureComponent {
  render() {
    console.log("Pure component render called");
    
    return (
      <div>
        Purecopm{this.props.name1}
      </div>
    );
  }
}

export default Purecopm;
