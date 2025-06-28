import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PostComment from "./PostComment";

function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState([]);
  const fetchPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const style = {
    marginTop: '10px'
  }

  return (
    <>
      <Link to={"/post-list"} className="btn btn-info btn-sm">
        Go Back
      </Link>

      <div className="card" style={style}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>

      <h3> Comments </h3>
      <PostComment post={post} />
    </>
  );
}

export default PostDetails;
