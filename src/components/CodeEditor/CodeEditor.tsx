import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { monokai, monokaiInit } from '@uiw/codemirror-theme-monokai';

const CodeEditor = () => {
  return (
    <CodeMirror theme={monokai} value={"// Type your code here.."} extensions={[cpp()]} onChange={() => {}} />
  );
};

export default CodeEditor;
