import { useEffect, useState } from "react";

function PostComment({ post }) {
  const style = {
    marginTop: "10px",
  };

  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!post.id) return;

    const fetchComments = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      );
      const data = await response.json();

      setComments(data);
    };

    fetchComments();
  }, [post.id]);

  if(comments.length === 0){
    return <p> No Comments Found</p>;
  }

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className="card" style={style}>
          <div className="card-body">
            <h5 className="card-title">{comment.name}</h5>
            <h6 className="card-subtitle">{comment.email}</h6>
            <p className="card-text">{comment.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostComment;
