import styles from "./addComment.module.css";
import { useState } from "react";
const AddComment = ({ parentId, handleCommentSubmit }) => {
  const [comment, setComment] = useState("");
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={comment}
        placeholder="Add new comment of min 3 characters"
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        onClick={() => {
          handleCommentSubmit(parentId, comment);
          setComment('')
        }}
        disabled={comment.length < 3}
      >
        Submit
      </button>
    </div>
  );
};

export default AddComment;
