import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import MovieCard from '../../components/movie-card/MovieCard';

const MoviesPage = (props) => {
  const { movies, page, total_pages, error } = props;
  const router = useRouter();

  return (
    <div>
      <div className="container">
        {(router.query.page > 0) & (router.query.page <= total_pages) || router.query.page === undefined ? (
          <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>

            <div style={{ margin: '50px auto 10px', width: 'fit-content' }}>
              <button
                onClick={() => {
                  router.push(`/movies?page=${page - 1}`);
                }}
                disabled={page <= 1}
              >
                prev
              </button>
              <button
                onClick={() => {
                  router.push(`/movies?page=${page + 1}`);
                }}
                disabled={page >= total_pages}
              >
                next
              </button>
            </div>
          </>
        ) : (
          <h3>{error}</h3>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // const {
  //   query: { page: number = 1 },
  // } = context;

  const { page = 1 } = context.query;

  const { API_URL, MY_KEY } = process.env;

  // if api support limit and start (we will Supposedly limit movie that 1 page will show is 3 movie in evry page [/movies?_limit=3&_start={start}])
  // and this start refaire to the index of first movie that will showed
  // const start = +page === 1 ? 0 : (page - 1) * 3;

  const res = await fetch(`${API_URL}/movie/popular?api_key=${MY_KEY}&page=${page}`);
  const data = await res.json();

  if ((page > 0) & (page <= +data.total_pages)) {
    return {
      props: {
        movies: data.results,
        page: +page,
        total_pages: +data.total_pages,
      },
    };
  } else {
    return {
      props: {
        error: data.errors[0],
      },
    };
  }
}

export default MoviesPage;
