import React, { useEffect, useState } from 'react'

const F02useEffect = () => {
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>{
            setPosts(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.error("Error fetching posts:",error);
            setLoading(false);

        });

    },[]);
    if(loading){
        return <h2>Loading posts...</h2>
    }
  return (
    <div>
      <h1>Posts</h1>
       <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li> // only show titles
        ))}
      </ul>
    </div>
  )
}

export default F02useEffect
