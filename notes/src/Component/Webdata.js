import React, { Component } from 'react';

export default class Webdata extends Component {
    render() {
        return (
            <div>
                <div class="card" style={{width:"400px"}}>
                    <div class="card-body">
                        <h4 class="card-title">{this.props.title}</h4>
                        <p class="card-text"> {this.props.desc}</p>
                        <a href="#" class="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        );
    }
}
