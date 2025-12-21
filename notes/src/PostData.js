import React, { Component } from 'react';
import axios from 'axios';

export default class PostData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response);
            this.setState({posts:response.data})
            
        })
    }
    
  render() {
    const {posts}=this.state
    return (
      <div>
        list data{
            posts.length ? posts.map(post=><div key={post.id}>{post.id}{post.title} {post.body} </div>) : null
        }
      </div>
    );
  }
}
