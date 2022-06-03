import React from 'react';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';

const movie = (movie) => {
  console.log('movie', movie);
  const SEO = {
    title: `Next Movies | ${movie.title}`,
    description: movie.overview,

    openGraph: {
      title: `Next Movies | ${movie.title}`,
      description: movie.title,
    },
  };

  const { IMG_URL } = process.env;
  const { id, overview, title, poster_path } = movie;

  return (
    <>
      <NextSeo {...SEO} />
      <div className="container" style={{ display: 'flex' }}>
        <div style={{ width: '300px', marginRight: '20px' }}>
          <img src={`${IMG_URL}${poster_path}`} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
};

// this done in the server
export async function getServerSideProps(context) {
  const { publicRuntimeConfig } = getConfig();
  // te get id of ul we cant use hook here because we out of the component
  const { id } = context.query;
  const { MY_KEY } = process.env;

  const res = await fetch(`${publicRuntimeConfig.API_URL}/movie/${id}?api_key=${MY_KEY}`);
  const data = await res.json();

  return {
    props: data,
  };
}

export default movie;
