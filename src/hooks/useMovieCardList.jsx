import React, { useEffect } from 'react';
import { OPTIONS } from '../../src/utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovie, addUpomingMovie, addTopRatedMovie } from '../utils/moviesSlice';

const useMovieCardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllMovieList = async () => {
      try {
        const [popularMovie, topRated, upComing] = await Promise.all([
          fetch(
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
            OPTIONS
          ),
          fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            OPTIONS
          ),
          fetch(
            'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
            OPTIONS
          ),
        ]);

        const popularMovies = await popularMovie.json();
        const topRateds = await topRated.json();
        const upComings = await upComing.json();

        console.log('Popular Movies:', popularMovies);
        console.log('Top Rated Movies:', topRateds);
        console.log('Upcoming Movies:', upComings);

        
        dispatch(addPopularMovie(popularMovies.results));
        dispatch(addTopRatedMovie(topRateds.results));
        dispatch(addUpomingMovie(upComings.results));

      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchAllMovieList()
    // eslint-disable-next-line
  }, [dispatch]);

  return <div></div>;
};

export default useMovieCardList;
