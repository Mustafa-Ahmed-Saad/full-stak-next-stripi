// import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';
import fetch from 'isomorphic-unfetch';
import MovieCard from '../components/movie-card/MovieCard';
import styled from '@emotion/styled';
// import {flex, box} from 're'

export default function Home({ movies: { page, results, total_pages } }) {
  console.log(results);

  return (
    <div className={styles.container}>
      <FlexCardsWrapper className="container">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </FlexCardsWrapper>
    </div>
  );
}

const FlexCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

// do this to pass data from api to home component
export async function getServerSideProps() {
  // get base api from .env
  const { API_URL, MY_KEY } = process.env;

  // featch all movie
  const res = await fetch(`${API_URL}/movie/popular?api_key=${MY_KEY}`);
  const data = await res.json();

  // return this props to home component
  return {
    props: {
      movies: data,
    },
  };
}
