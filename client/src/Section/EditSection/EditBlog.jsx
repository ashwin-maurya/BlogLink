import React from "react";
import TinyMCEEditor from "../../Helper/Editor";
// import WysiwygEditor from "../../Helper/WysiwygEditor";

const EditBlog = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TinyMCEEditor />
      </header>

      <div>{/* <WysiwygEditor></WysiwygEditor> */}</div>
    </div>
  );
};

export default EditBlog;
