import styles from "./comment.module.css";
import AddComment from "./AddComment";
const Comment = ({ comment, handleCommentSubmit }) => {
  return (
    <div className={styles.container}>
      <span>{comment.description} </span> 
      <span className={styles.timestamp}> at {comment.timeStamp}</span>

      <AddComment
        parentId={comment.id}
        handleCommentSubmit={handleCommentSubmit}
      />
      {comment?.comments?.map((comment) => (
        <Comment
          comment={comment}
          key={comment.id}
          handleCommentSubmit={handleCommentSubmit}
        />
      ))}
    </div>
  );
};

export default Comment;
