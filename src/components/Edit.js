import React from 'react';
import CKEditor from 'ckeditor4-react';

export default function Edit() {
  return (
    <div>
      <h2>Edit</h2>
      <CKEditor
        data="<p>Hello from CKEditor 4!</p>"
      />
    </div>
  );
}
