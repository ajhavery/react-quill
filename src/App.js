import { useState } from 'react';
import QuillEditorBasic from './components/QuillEditorBasic';
import QuillEditorFull from './components/QuillEditorFull';

const App = () => {
  const [basicState, setBasicState] = useState('');
  const [fullState, setFullState] = useState('');

  return (
    <div className='container mx-auto mt-12 space-y-4'>
      <h1 className='text-2xl font-bold text-center'>
        React Quill Rich Text Editor Demo
      </h1>

      <div className='flex justify-center'>
        <div className='w-full max-w-lg space-y-4'>
          <h2 className='text-2xl font-bold text-center'>Quill Basic Editor</h2>

          <QuillEditorBasic
            value={basicState}
            setValue={setBasicState}
            placeholder='Add 4-5 lines describing your product'
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-full max-w-lg'>
          <h2>HTML output:</h2>
          <div>{JSON.stringify(basicState, null, 2)}</div>
        </div>
      </div>
      {/* advanced quill editor */}
      <div className='flex justify-center'>
        <div className='w-full max-w-lg space-y-4'>
          <h2 className='text-2xl font-bold text-center'>Quill Full Editor</h2>
          <QuillEditorFull
            value={fullState}
            setValue={setFullState}
            placeholder='Add 4-5 lines describing your product'
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-full max-w-lg'>
          <h2>HTML output:</h2>
          <div>{JSON.stringify(fullState, null, 2)}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
