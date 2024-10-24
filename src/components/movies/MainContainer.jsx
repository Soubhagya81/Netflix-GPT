import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (!movies) return;

    // let moviesList = movies.length
    // let selectedMovie = Math.floor(Math.random() * moviesList)
    const moviePlay = movies[15];
 
   

    const {original_title, overview, poster_path, id} = moviePlay;
    return (
        <div>
            <VideoTitle title = {original_title} overview = {overview} poster = {poster_path} />
            <VideoBackground id = {id}/>
        </div>
    )
}

export default MainContainer