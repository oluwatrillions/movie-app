import React from 'react'
import './Movies.css'


const Movies = ({ Title, Year, Poster, imdbID }) => {
    const defaultPoster = 'https://m.media-amazon.com/images/M/MV5BNGEzMjdiZGEtYzU3ZC00OGFmLWI3NTgtZTcyNTFjYTliNDg5XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg'
    
    return (
      <div className='movie-container'>
        <div className='movie-div' key={imdbID}>
            <img src={Poster === "N/A" ? defaultPoster : Poster} alt={Title} className='image'/>
            <h2>{Title}</h2>
            <h5>{ Year}</h5>
        </div>
    </div> 
  )
}

export default Movies