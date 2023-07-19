import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const GetAxiosExample = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, status } = await axios.get(URL)
      if (status === 200) setPosts(data)
      // const response2 = await fetch('https://jsonplaceholder.typicode.com/posts')
      // console.log(response)
      // console.log(await response2.json())
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Get Axios Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetAxiosExample;
