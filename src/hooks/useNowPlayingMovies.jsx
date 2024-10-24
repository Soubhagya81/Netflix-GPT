import { OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      OPTIONS
    );

    const movieList = await data.json();
    dispatch(addNowPlayingMovies(movieList.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line
  }, []);
};

export default useNowPlayingMovies;
