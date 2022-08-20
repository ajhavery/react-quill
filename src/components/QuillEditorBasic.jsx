import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const modules = {
  toolbar: [
    [{ header: ['', 5, 4, 3] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
];

const QuillEditorBasic = ({ value, setValue, placeholder }) => {
  return (
    <div>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        formats={formats}
        modules={modules}
      />
    </div>
  );
};

export default QuillEditorBasic;
