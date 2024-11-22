import { useSelector} from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

function VideoBackground({ id }) {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo)
  
  useMovieTrailer(id);
  console.log("trailerVideo.key", trailerVideo?.key)
 
  return (
    <div className="">
    <iframe 
      className="w-screen aspect-video" 
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&cc_load_policy=2`} 
      title="YouTube video player" 
      referrerPolicy="strict-origin-when-cross-origin"
      allow="autoplay; encrypted-media"
      allowFullScreen
      >
    </iframe>
  </div>
  );
}

export default VideoBackground;
