import PropTypes from 'prop-types';
import React from 'react';
import Link from 'gatsby-link';

const sizes = {
  default: ``,
  lg: `py-6 px-6`,
  xl: `py-6 px-6 text-xl`,
};

export const Button = ({
  children,
  href,
  to,
  classes = '',
  size,
  ...params
}) => {
  const classNames =
    'inline-block px-5 py-2 m-1 font-medium leading-snug border border-transparent text-base rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out bgPrimary no-underline text-white';

  const formattedHref = href === '' ? '/' : href;
  if (formattedHref && formattedHref.includes('https://')) {
    return (
      <a
        href={formattedHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizes[size] || sizes.default} ${classNames} ${classes}`}
        {...params}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        to={formattedHref}
        className={`${classNames} ${classes}`}
        {...params}
      >
        {children}
      </Link>
    );
  }
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

Button.defaultProps = {
  href: null,
};
