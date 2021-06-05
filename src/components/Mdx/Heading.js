import React from 'react';

export const Heading = ({ tag, children }) => {
  console.log(tag);
  console.log(children);
  const Htag = `h${tag}`;
  return <Htag style={{ color: 'rebeccapurple' }}>{children}</Htag>;
};

export default Heading;
