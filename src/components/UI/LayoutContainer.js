import React from 'react';
import Layout from '../layout';
import Seo from '../seo';

export default function LayoutContainer({
  siteTitle,
  brand,
  hero,
  newsletter,
  copyright,
  slugs,
  children,
  title,
  description,
  categories,
}) {
  return (
    <Layout
      siteTitle={siteTitle}
      brand={brand}
      hero={hero}
      newsletter={newsletter}
      copyright={copyright}
      slugs={slugs}
    >
      <Seo title={title} description={description} keywords={categories} />
      {children}
    </Layout>
  );
}
