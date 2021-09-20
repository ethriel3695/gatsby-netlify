import React from 'react';
import '../styles/global.css';
import DynamicComponent from './DynamicComponent';
import { useLayout } from '../hooks/layout';

const Layout = ({ children }) => {
  const headerData = useLayout();
  let story = headerData;
  let parsedContent = JSON.parse(story.content);
  const header = parsedContent.header.map((blok) => {
    return <DynamicComponent blok={blok} key={blok._uid} />;
  });
  const footer = parsedContent.footer.map((blok) => {
    return <DynamicComponent blok={blok} key={blok._uid} />;
  });
  return (
    <div className="min-h-screen">
      {header}
      <main className="flex-grow">{children}</main>
      <hr className="mt-12 border-top-2 border-solid border-gray-500" />
      {footer}
    </div>
  );
};

export default Layout;
