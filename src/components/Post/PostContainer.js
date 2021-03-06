import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from '../../CodeBlock';
import Content from '../Post/Content';

const Code = CodeBlock;

const InlineCode = (props) => (
  <code {...props} className="font-mono bg-yellow-200 p-1" />
);

const components = {
  // pre: Pre,
  code: Code,
  inlineCode: InlineCode,
};

export const BlogPostTemplate = ({ content, contentComponent, data }) => {
  const PostContent = contentComponent || Content;
  return (
    <div className="post-single-container">
      <article className="post-single">
        <header>
          <h1 className="text-center">{data.title}</h1>
          <div className="text-md text-center">
            <span>{`${data.date}`}</span>
          </div>
        </header>
        <div className="text-left container">
          <PostContent content={content} />
        </div>
      </article>
    </div>
  );
};

export default function PostContainer({ data, frontmatter }) {
  const { title } = frontmatter;

  return (
    <div className="post-single-container">
      <article className="post-single">
        <header>
          {/*banner && showBanner ? (
            <Img
              fluid={banner.sharp.fluid}
              alt={title}
              style={{ height: '70vh', textAlign: 'center' }}
            />
          ) : null*/}
          <h1 className="text-center">{title}</h1>
          {/* <div className="text-md text-center">
            <span>{date}</span>
          </div> */}
        </header>
        <div className="text-left container">
          <MDXProvider components={components}>
            <MDXRenderer>{data}</MDXRenderer>
          </MDXProvider>
        </div>
      </article>
    </div>
  );
}
