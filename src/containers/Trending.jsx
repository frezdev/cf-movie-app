import React from 'react';
import Movie from '@components/Movie';
import '@styles/Trending.css';
import { useGetMovies } from '@hooks/useGetData';

const endpoint = 'trending/movie/day';
function Trending() {

  const movies = useGetMovies(endpoint);
  return(
    <section id="trendingPreview" className="trendingPreview-container">
      <div className="trendingPreview-header">
        <h2 className="trendingPreview-title">Tendencias</h2>
        <button className="trendingPreview-btn">Ver más</button>
      </div>
      <article className="trendingPreview-movieList">
        {
          movies.map(movie => (
            <Movie 
              image={movie.poster_path}
              name={movie.original_title}
              key={movie.id} />
          ))
        }
      </article>
    </section>
  );
}
export default Trending;