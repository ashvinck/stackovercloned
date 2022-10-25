// import React from 'react'
// import ReactQuill from 'react-quill';
// import Editor from "react-quill/lib/toolbar";
// import 'react-quill/dist/quill.snow.css';

// const ReQuill = () => {

//     var toolbarOptions = [
//         ["bold", "italic", "underline", "strike"], // toggled buttons
//         ["blockquote", "code-block"],

//         [{ header: 1 }, { header: 2 }], // custom button values
//         [{ list: "ordered" }, { list: "bullet" }],
//         [{ script: "sub" }, { script: "super" }], // superscript/subscript
//         [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
//         [{ direction: "rtl" }], // text direction

//         [{ size: ["small", false, "large", "huge"] }], // custom dropdown
//         [{ header: [1, 2, 3, 4, 5, 6, false] }],

//         [
//             { color: ["#ff0000", "#00ff00", "#0000ff", "#220055"] },
//             { background: [] }
//         ], // dropdown with defaults from theme
//         [{ font: [] }],
//         [{ align: [] }],

//         ["clean"], // remove formatting button
//     ];
//     Editor.modules = {
//         syntax: false,
//         toolbar: toolbarOptions,
//         clipboard: {
//             // toggle to add extra line breaks when pasting HTML:
//             matchVisual: false,
//         },
//     };
//     /*
//      * Quill editor formats
//      * See https://quilljs.com/docs/formats/
//      */
//     Editor.formats = [
//         "header",
//         "font",
//         "size",
//         "bold",
//         "italic",
//         "underline",
//         "strike",
//         "blockquote",
//         "list",
//         "bullet",
//         "indent",
//         "link",
//         "image",
//         "video",
//     ];


//     return (
//         <div className='Quill-container'>
//             <ReactQuill
//                 // value={body}
//                 // onChange={handleQuill}
//                 modules={Editor.modules}
//                 className="react-quill"
//                 theme="snow"
//                 style={{
//                     height: "200px",
//                 }}
//             />
//         </div>
//     )
// }

// export default ReQuill;