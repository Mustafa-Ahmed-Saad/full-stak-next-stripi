import React from 'react';

import { NextSeo } from 'next-seo';

const About = () => {
  const SEO = {
    title: 'About page',
    description: 'just your normal about page',

    openGraph: {
      title: 'About page',
      description: 'Just your normal about page',
    },
  };

  return (
    <div>
      <NextSeo {...SEO} />
      <div className="container">
        <h3>i am about page</h3>
      </div>
    </div>
  );
};

export default About;
