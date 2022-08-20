import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const modules = {
  toolbar: [
    [{ header: '3' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
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
