import useSWR from "swr";
import { fetcher } from "./fetcher";

const URL = 'https://jsonplaceholder.typicode.com/posts';

const GetSWRExample = () => {
  const { data: posts, isLoading, error } = useSWR(URL, fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load posts</div>;

  return (
    <div>
      <h1>Get SWR Example</h1>
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

export default GetSWRExample;
