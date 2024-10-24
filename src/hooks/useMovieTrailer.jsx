import React, {useEffect} from 'react'
import { OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../../src/utils/moviesSlice";

function useMovieTrailer(movieiId) {
 
    const dispatch = useDispatch()
   
    async function fetchVideo() {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieiId}/videos?language=en-US`,
        OPTIONS
      );
      const responseJson = await data.json();
  
      const filterData = responseJson.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : responseJson.results[0];
      console.log(trailer.key);
      dispatch(addTrailerVideo(trailer))
    }
  
    useEffect(() => {
      fetchVideo();
      // eslint-disable-next-line
    }, []);
  
  return (
    <div></div>
  )
}

export default useMovieTrailer