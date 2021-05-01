import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import PropTypes from 'prop-types';

import { CatchError } from './catch-error';
import { CMS_COMPONENTS } from '../cms/cms-components';

/* Use this component to parse markdown using MDX. See MDX runtime for details.
 * The map provided to the components prop instructs MDX on how to render your HTML and
 * custom React components.
 *
 * @md: string - Markdown to be parsed
 */

export const RenderMarkdown = ({ md }) => (
  <CatchError>
    <MDXProvider components={{ ...CMS_COMPONENTS }}>{md}</MDXProvider>
  </CatchError>
);

RenderMarkdown.defaultProps = {
  md: '',
};

RenderMarkdown.propTypes = {
  md: PropTypes.string.isRequired,
};
