import styles from "./Post.module.css";

function Post({ author, body }) {
  return (
    <div className={styles.post}>
      <h2 className={styles.author}>{author}</h2>
      <p className={styles.text}>{body}</p>
    </div>
  );
}

export default Post;
