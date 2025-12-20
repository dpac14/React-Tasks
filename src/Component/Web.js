import React, { Component } from 'react';
import Webdata from './Webdata';

export default class Web extends Component {
    data=[
        {id:1,title:"React",desc:"This is react course"},
        {id:2,title:"Agular",desc:"This is Agrular course"},
        {id:3,title:"Vue",desc:"This is Vue course"},
        {id:4,title:"Svelt",desc:"This is Svelt course"},
    ]
    constructor(props) {
      super(props)
    
      this.state = {
         data:this.data
      }
    }
    
  render() {
    return (
      <div>
        <div class="row">
            {this.state.data.map((item) =>(
            <div class="col-lg-3"><Webdata key={item.id} title={item.title} desc={item.desc}/></div>
            ))}

        </div>

      </div>
    );
  }
}
