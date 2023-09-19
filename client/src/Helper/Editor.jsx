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
        <Editor
          apiKey="01yappq7mx9884k0ggoceocm8uz7ko4za08cfy5m9t039jmq" // Replace with your TinyMCE API key or use the cloud API
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            selector: "textarea", // change this value according to your HTML

            height: 500,
            menubar: false,

            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table contextmenu paste imagetools wordcount",
            ],
            toolbar:
              "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            // imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
            content_css: [
              "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
              "//www.tinymce.com/css/codepen.min.css",
            ],

            codesample_languages: [
              { text: "HTML/XML", value: "markup" },
              { text: "JavaScript", value: "javascript" },
              { text: "CSS", value: "css" },
              { text: "PHP", value: "php" },
              { text: "Ruby", value: "ruby" },
              { text: "Python", value: "python" },
              { text: "Java", value: "java" },
              { text: "C", value: "c" },
              { text: "C#", value: "csharp" },
              { text: "C++", value: "cpp" },
            ],
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
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// <Editor
//   editorState={editorState}
//   toolbarClassName="toolbarClassName"
//   wrapperClassName="wrapperClassName"
//   editorClassName="editorClassName"
//   onEditorStateChange={this.onEditorStateChange}
// />;

// tinymce.init({
//   selector: 'textarea#codesample',
//   height: 500,
//   plugins: 'codesample code',
//   codesample_languages: [
//     {text: 'HTML/XML', value: 'markup'},
//     {text: 'JavaScript', value: 'javascript'},
//     {text: 'CSS', value: 'css'},
//     {text: 'PHP', value: 'php'},
//     {text: 'Ruby', value: 'ruby'},
//     {text: 'Python', value: 'python'},
//     {text: 'Java', value: 'java'},
//     {text: 'C', value: 'c'},
//     {text: 'C#', value: 'csharp'},
//     {text: 'C++', value: 'cpp'}
//   ],
//   toolbar: 'codesample code',
//   content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
// });
