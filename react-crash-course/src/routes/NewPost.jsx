import { Form, useNavigate } from "react-router-dom";
import classes from "./NewPost.module.css";

function NewPost() {
  const navigate = useNavigate();

  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="text">Text</label>
        <textarea id="text" name="body" rows="5" required />
      </p>
      <p>
        <label htmlFor="author">Your Name</label>
        <input type="text" id="author" name="author" required />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={() => navigate("..")}>
          Cancel
        </button>
        <button type="submit">Add Post</button>
      </p>
    </Form>
  );
}

export default NewPost;
