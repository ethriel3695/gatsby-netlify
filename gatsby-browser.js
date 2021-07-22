// import React from 'react';
// import { navigate } from 'gatsby';
// import Layout from './src/components/layout';
// import './src/styles/global.css';

// const onRedirectCallback = appState => navigate(appState?.returnTo || '/');

// export const wrapRootElement = ({ element }) => {
//   return (
//     <Layout
//       domain={process.env.GATSBY_AUTH0_DOMAIN}
//       clientId={process.env.GATSBY_AUTH0_CLIENT_ID}
//       scope="read:users"
//       redirectUri={window.location.origin}
//       onRedirectCallback={onRedirectCallback}
//     >
//       {element}
//     </Layout>
//   );
// };
