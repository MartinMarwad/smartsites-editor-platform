import type { CellPlugin } from '@react-page/editor';
import dynamic from 'next/dynamic';
import React from 'react';

// Code snippet
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as style } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeSnippet: React.FC<{ code: string; language: string; }> = ({ code, language }) => (
  <SyntaxHighlighter wrapLongLines language={language} style={style}>
    {code}
  </SyntaxHighlighter>
);

const codeSnippet: CellPlugin<{
  code: string;
  language: string;
}> = {
  Renderer: ({ data }) =>
    data?.code ? (
      <CodeSnippet language={data.language} code={data.code} />
    ) : null,
  id: 'code-snippet',
  title: 'Code snippet',
  description: 'A code snippet',
  version: 1,
  controls: {
    type: 'autoform',
    schema: {
      properties: {
        language: {
          type: 'string',
        },
        code: {
          type: 'string',
          uniforms: {
            multiline: true,
          },
        },
      },
      required: ['code'],
    },
  },
};
export default codeSnippet;
