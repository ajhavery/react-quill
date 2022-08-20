import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import QuillToolbarFull, { modules, formats } from './QuillToolbarFull';

const QuillEditorFull = ({ value, setValue, placeholder }) => {
  return (
    <div>
      <QuillToolbarFull toolbarId={'t1'} />
      <ReactQuill
        theme='snow'
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        modules={modules('t1')}
        formats={formats}
      />
    </div>
  );
};

export default QuillEditorFull;
