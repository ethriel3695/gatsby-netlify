import React from 'react';
import CodeBlock from '../../CodeBlock';
import { RenderMarkdown } from '../../core/render-markdown';

// const Pre = props => (
//   <pre
//     {...props}
//     className="font-mono scrollbar-none text-white bg-gray-800 overflow-auto rounded-md"
//   />
// );
const Code = CodeBlock;

const InlineCode = props => (
  <code {...props} className="font-mono bg-yellow-200 p-1" />
);

const components = {
  // pre: Pre,
  code: Code,
  inlineCode: InlineCode,
};

export default function CMSPostContainer({ data, frontmatter }) {
  const { title } = frontmatter;

  return (
    <div className="post-single-container">
      <article className="post-single">
        <header>
          <h1 className="text-center">{title}</h1>
        </header>
        <div className="text-left container">
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
      </article>
    </div>
  );
}
