import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const MovieCard = ({ movie: { title, poster_path, overview, id } }) => {
  const { IMG_URL } = process.env;

  return (
    <Card>
      <div className="poster">{<img src={`${IMG_URL}${poster_path}`} alt="poster" />}</div>
      <div className="card-movie-body">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: overview }} />
        <Link href="/movies/[id]" as={`/movies/${id}`}>
          <a style={{ color: 'blue' }}>See More</a>
        </Link>
      </div>
    </Card>
  );
};

const Card = styled.div`
  width: 400px;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .card-movie-body {
    padding: 20px;
    h3 {
      margin-bottom: 20px;
    }
    p {
      color: #666666;
      line-height: 1.5;
    }
  }
`;

export default MovieCard;
