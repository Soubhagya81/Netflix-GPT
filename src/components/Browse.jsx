import useMovieCardList from '../hooks/useMovieCardList'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './movies/MainContainer'
import SecondaryContainer from './movies/SecondaryContainer'

const Browse = () => {

  useNowPlayingMovies()
  useMovieCardList()

  return (
    <div>
  <Header></Header>
  <MainContainer/>
  <SecondaryContainer/>
    </div>
   
  )
}

export default Browse