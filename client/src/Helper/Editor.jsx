// import React from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { useContext, useState } from "react";
import blogContext from "./Context/blogContext";
// import { log } from "console";
// import { content } from "../../../server";

function TinyMCEEditor() {
  const [Content, setContent] = useState("");
  const context = useContext(blogContext);
  const { addblogs } = context;
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setContent(content);
  };

  return (
    <>
      <div>
        <h2>TinyMCE Editor</h2>
        <Editor
          apiKey="01yappq7mx9884k0ggoceocm8uz7ko4za08cfy5m9t039jmq" // Replace with your TinyMCE API key or use the cloud API
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image",
              "charmap print preview anchor help",
              "searchreplace visualblocks code",
              "insertdatetime media table paste wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
          }}
          onEditorChange={handleEditorChange}
        />
      </div>
      <div>
        <button
          onClick={() => {
            addblogs(Content);
            console.log("blog sent");
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default TinyMCEEditor;
