import React from 'react';
import CKEditor from 'ckeditor4-react';

export default function Edit() {
  return (
    <div>
      <h2>Edit</h2>
      <CKEditor
        data="<p>Hello from CKEditor 4!</p>"
        // type="classic"
        type="inline"
        onChange={evt => console.log( evt )}
      />
      {/* <CKEditor
        data="<p>Editor' content</p>"
        config={{
          toolbar: [['Bold']]
        }}
      /> */}
    </div>
  );
}
