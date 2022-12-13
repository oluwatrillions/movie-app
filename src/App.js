import { useEffect, useState } from 'react';
import './App.css'
import Movies from './Movies';
import axios from 'axios'

function App() {
    const API_KEY = '98cbfa52'
    const movie_api = `https://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`
    

        const [search, setSearch] = useState('')
        const [movies, setMovies] = useState([])
        const [category, setCategory] = useState('')

            useEffect(() => {
                axios(movie_api)
                    .then((response) => {
                        setMovies(response.data.Search)
                    })
            }, [search])

    const searchBtn = async (e) => {
        const searchURL = `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`

            const info = await axios(searchURL)
                        .then((response) => {
                            setMovies(response.data.Search)
                        })         
    }
    
     const categoryBtn = async (e) => {
        const categoryURL = `https://www.omdbapi.com/?s=${category}&apikey=${API_KEY}`

            const info = await axios(categoryURL)
                        .then((response) => {
                            setMovies(response.data.Search)
                        })         
}
    
    return (
        <div className='container'>
            <div className='search'>
                <h2>Movie App</h2>
                <div className='search-box'>
                        <input type='text' value={search} onChange={((e) => setSearch(e.target.value))} />
                        <button onClick={() => searchBtn(search)}>Search</button>
                </div>
                <div className='category'>
                        <input type='text' value={category} onChange={((e) => setCategory(e.target.value))} />
                        <button onClick={() => categoryBtn(category)}>Category</button>
                </div>
            </div>
            <div className="App">           
            {movies.map((movie) => (
                <Movies key={ movie.imdbID} {...movie} />
            ))
            }
            </div>
        </div>
  );
}

export default App;
