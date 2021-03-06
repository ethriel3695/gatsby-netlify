import React from 'react';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <div>
    <Seo title="404: Not found" description="This route does not exist!" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
