import React, { useState, useEffect } from 'react';
import { map } from 'lodash-es';
import { asyncGETwithCreds } from '../../common/services/async.service';
import { MovieCard } from './MovieCard';
import './movies.css';


const Movies = () => {
  const [movies, setMovies] = useState([]);


  // Side effects go in useEffect (i.e. api calls, etc...)
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.themoviedb.org/4/list/93761';
      const movies = await asyncGETwithCreds(url);

      setMovies(movies);
    }

    fetchData();
  }, []);


  return (
    <section style={{ marginTop: 35 }}>
      <div className="grid-container center-grid-items">
        <div className="movies">
          {
            map(movies, movie => {
              return (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  img={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
}


export default Movies;