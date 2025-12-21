import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Hook6() {
    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setPost(response.data);

            })
            .catch((error) => {
                console.log("Error fetching data", error);

            });
    }, [id])
    return (
        <div>
            <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
            <div>
                <h2>Title:- {post.title}</h2>
                <h2>Body:- {post.body}</h2>
            </div>
            {/* <ul>
      {
        post.map((item) => ( 
            <li key={item.id}>{item.title}{item.body}</li>
        ))
      }
      </ul> */}
        </div>
    );
}

export default Hook6;
