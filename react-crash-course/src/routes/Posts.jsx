import PostList from "../components/PostsList";

import { Outlet, useNavigate } from "react-router-dom";

function Posts() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <PostList />
      </main>
      <Outlet />
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");

  const resData = await response.json();
  return resData.posts;
}
