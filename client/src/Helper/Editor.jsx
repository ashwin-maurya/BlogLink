import { Editor } from "@tinymce/tinymce-react";

function TinyMCEEditor({ blogs, description }) {
  const handleEditorChange = (content) => {
    description(content);
  };

  return (
    <>
      <div className="dark:bg-black">
        <Editor
          apiKey="01yappq7mx9884k0ggoceocm8uz7ko4za08cfy5m9t039jmq" // Replace with your TinyMCE API key or use the cloud API
          init={{
            selector: "textarea", // change this value according to your HTML

            height: 650,
            menubar: true,

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
          value={blogs?.blogcontent?.description}
          onEditorChange={handleEditorChange}
        />
      </div>
      <div></div>
    </>
  );
}

export default TinyMCEEditor;
