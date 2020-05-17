import React from "react";

function CommentList({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content} {comment.status === "pending" &&  "pending"}</li>
      ))}
    </ul>
  );
}

export default CommentList;
