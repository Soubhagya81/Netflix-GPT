import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MovieList = ({ title, movieList }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 9
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  if (!movieList || movieList.length === 0) {
    return null; // or display a loading spinner or message here
  }

  return (
    <div className="movie-carousel-container px-4 py-4">
      <h1 className="text-2xl font-semibold text-white mb-3">{title}</h1>
      <div className="carousel-wrapper rounded-md">
        <Carousel responsive={responsive} infinite={true} autoPlay={true}>
          {movieList &&
            movieList.map((movie, index) => (
              <div key={index} className="movie-item ">
                <img className='rounded-md'
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                  alt={movie.title}
                  style={{ height: '260px', objectFit: 'cover' }}
                />
               
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieList;
