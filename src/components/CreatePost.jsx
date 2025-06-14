import { useState } from "react";

function CreatePost() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [success, setSuccess] = useState(false);

    const CREATED = 201;


    const handleSubmit =  async (e) => {
        
        // Preparing post data to be submitted
        const newPost = {
            title,
            body,
            userId: 1
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        }

        const postRequest = await fetch("https://jsonplaceholder.typicode.com/posts", options);
        console.log(postRequest);
        if (postRequest.status === CREATED && postRequest.ok === true ){
            setSuccess(true);
            setBody('');
            setTitle('');
        }
    }

  return (
    <div className="container">
        { success && (
            <div className="alert alert-success"> Post Created Successfully! </div>
        )}
      <form className="mt-3" >
        <div className="mb-3">
          <label className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Post Title"
            value={title}
            onChange={ e => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Post Body
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={body}
            onChange={e => setBody(e.target.value)}
          ></textarea>
        </div>

        <button type="button" onClick={handleSubmit} className="btn btn-primary"> Create</button>
      </form>
    </div>
  );
}

export default CreatePost;
