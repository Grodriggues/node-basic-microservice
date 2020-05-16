import React from "react";
import axios from "axios";

function PostCreate() {
  const [title, setTitle] = React.useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts",{
      title
    })

    setTitle("")
  }

  

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>title</label>
          <input type="text" value={title} onChange={onChange} className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PostCreate;
