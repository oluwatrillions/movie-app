import React from 'react'
import './Movies.css'


const Movies = ({Title, Year, Poster, imdbID}) => {
    return (
      <div className='movie-container'>
        <div className='movie-div' key={imdbID}>
            <img src={Poster} alt={Title} className='image'/>
            <h2>{Title}</h2>
            <h5>{ Year}</h5>
        </div>
    </div> 
  )
}

export default Movies