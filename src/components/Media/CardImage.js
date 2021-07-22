import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const CardImage = ({ className, fluid, ...params }) => {
  const classNames =
    'opacity-100 hover:opacity-75 cursor-pointer max-w-sm rounded-md';
  return (
    <div>
      {fluid && (
        <GatsbyImage
          className={`${classNames} ${className && className}`}
          image={fluid}
          {...params}
        />
      )}
    </div>
  );
};

export default CardImage;
