import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Post from "./components/Post";
// const postStructure = {
//   id: "",
//   title: "",
//   description: "",
//   timeStamp: "",
//   comments: [],
// };

// const commentStructure = {
//   id: "",
//   parentId: "",
//   description: "",
//   timeStamp: "",
//   comments: [],
// };

const NestedComment = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      description: "Description of Post 1",
      timeStamp: new Date().toLocaleString(),
      comments: [],
    },
    {
      id: 2,
      title: "Post 2",
      description: "Description of Post 2",
      timeStamp: new Date().toLocaleString(),
      comments: [],
    },
    {
      id: 3,
      title: "Post 3",
      description: "Description of Post 3",
      timeStamp: new Date().toLocaleString(),
      comments: [],
    },
  ]);

  const handleCommentSubmit = (parentId, comment) => {
    const updatedPosts = findAndUpdatecomment(posts, parentId, comment);
    setPosts([...updatedPosts]);
  };

  const findAndUpdatecomment = (datas, parentId, comment) => {
    if (!datas.length) {
      return datas;
    }
    datas.forEach((data) => {
      if (data.id === parentId) {
        data.comments.push({
          id: uuidv4(),
          parentId,
          description: comment,
          timeStamp:new Date().toLocaleString(),
          comments: [],
        });
        return datas;
      } else {
        return findAndUpdatecomment(data.comments, parentId, comment);
      }
    });
    return datas;
  };

  return (
    <div>
      <h3>Nested comments</h3>
      {posts.map((post) => (
        <Post
          post={post}
          key={post?.id}
          handleCommentSubmit={handleCommentSubmit}
        />
      ))}
    </div>
  );
};

export default NestedComment;
