import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    if (!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img src={IMG_CDN+posterPath} alt="" />
    </div>
  )
}

export default MovieCard
