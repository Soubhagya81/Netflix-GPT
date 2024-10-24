import React from 'react'
import { MOVIE_POSTER } from '../../utils/constant'


export const MovieCard = ({poster_path}) => {
  return (
    <div className='p-2 flex-none'>
        <div  className=''>
          <img  className='w-40 h-60 object-cover' src={MOVIE_POSTER + poster_path} alt="movie poster" />
        </div>
    </div>  
  )
}


export default MovieCard
