import { StrictMode } from "react";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import "./index.css";
import RootLayout from "./routes/RootLayout";
import NewPost from "./routes/NewPost.jsx";
import Modal from "./components/Modal";

async function newPostAction({ request }) {
  const formData = await request.formData();
  const postData = {
    author: formData.get("author"),
    body: formData.get("body"),
  };

  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Response("Failed to add post", { status: 500 });
  }

  return redirect("..");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            element: (
              <Modal>
                <NewPost />
              </Modal>
            ),
            action: newPostAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
