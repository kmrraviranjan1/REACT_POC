import styles from "./post.module.css";
import Comment from "./Comment";
import AddComment from "./AddComment";
const Post = ({ post, handleCommentSubmit }) => {
  return (
    <div className={styles.container}>
      <div key={post?.id} className={styles.post}>
        <h4>{post?.title}</h4>
        <span>{post?.description} </span>
        <span className={styles.timestamp}> at {post?.timeStamp}</span>
        <AddComment
          parentId={post.id}
          handleCommentSubmit={handleCommentSubmit}
        />
        {post?.comments?.map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
            handleCommentSubmit={handleCommentSubmit}
          />
        ))}
      </div>
    </div>
  );
};

export default Post;
