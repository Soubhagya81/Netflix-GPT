import { useSelector} from "react-redux";
import  MovieList  from "./MovieList";
import React from 'react'

const SecondaryContainer = () => {
  

    const movieList = useSelector(store => store?.movies)
    console.log("upcoming",movieList.upomingMovie);
    return (
        <div className="px-10 bg-black">
            <div className="-mt-[292px] relative z-10">
            <MovieList title= {"Now Playing"} movieList = {movieList.nowPlayingMovies}/>
            <MovieList title= {"Up Coming"} movieList = {movieList.upomingMovie}/>
            <MovieList title= {"Top Rated"} movieList = {movieList.topRatedMovie}/>
            <MovieList title= {"Popular"} movieList = {movieList.popularMovie}/>
            </div>
           
        </div>
    )
}

export default SecondaryContainer