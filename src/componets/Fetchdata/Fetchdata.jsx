import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fetchdata() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    const handleRemove = (postId) => {
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    };
  
  return (
    <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody border="1">
      {posts.map((post) => (
        <tr key={post.id}>
          <td border="1">{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
          <td>
            <button onClick={() => handleRemove(post.id)}>Remove</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}
