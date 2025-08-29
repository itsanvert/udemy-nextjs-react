import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div className={classes.noPosts}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
