import { useState } from "react";

function CreatePost() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [success, setSuccess] = useState(false);
    const [titleError, setTitleError] = useState("");
    const [bodyError, setBodyError] = useState("");

    const CREATED = 201;

    const validateTitle = (value) => {
      if (!value.trim()){
        setTitleError("Title is Required");
        return false;
      } else if (value.trim().length < 4){
        setTitleError("Title must be at least 4 characters");
        return false;
      } else if( value.trim().length > 20) {
        setTitleError("Title cannot be more than 20 characters");
      } else {
        setTitleError("");
        return true;
      }
    }

    const validateBody = (value) => {
      if (!value.trim()){
        setBodyError("Body is Required");
        return false;
      } else if (value.trim().length < 10){
        setBodyError("Body must be at least 10 characters");
        return false;
      } else if( value.trim().length > 200) {
        setBodyError("Body cannot be more than 200 characters");
      } else {
        setBodyError("");
        return true;
      }
    }

    const handleSubmit =  async (e) => {

      const isTitleValid = validateTitle(title);
      const isBodyValid = validateBody(body);

      if(!isTitleValid || !isBodyValid) {
        setSuccess(false);
        return;
      }
        
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
        } else {
          setSuccess(false);
        }          
    }

    const isFormValid =
           title.trim().length >=4 &&
          title.trim().length <=20 &&
          body.trim().length >= 10 && 
          body.trim().length  <= 200;
      

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
            onChange={ e => {
               setTitle(e.target.value);
               validateTitle(e.target.value);
            }}
          />
          { titleError && <p className="text-danger">{titleError}</p>}
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
            onChange={e => {
              setBody(e.target.value);
              validateBody(e.target.value);
            } }
          ></textarea>
              { bodyError && <p className="text-danger">{bodyError}</p>}
        </div>

        <button type="button" onClick={handleSubmit} className="btn btn-primary" disabled={!isFormValid}> Create</button>
      </form>
    </div>
  );
}

export default CreatePost;
