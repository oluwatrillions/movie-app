import React, {useState} from 'react'
import Select from 'react-dropdown-select'


const Header = ({movies, searchBtn, search, setSearch}) => {
     const options = [
                { value: 'episode', label: 'Episode' },
                { value: 'movies', label: 'Movies' },
                { value: 'series', label: 'Series'}
    ]

  return (
    <div className='container'>
            <div className='search'>
                <h2>Movie App</h2>
                <div className='search-box'>
                    <input type='text' placeholder='Enter movie name' value={search} onChange={(e)=> setSearch(e.target.value)}/>
                    <button onClick={searchBtn}>Search</button>
                </div>
                <div className='category'>
                    <Select options={options} background-color='red' />
                </div>
          </div>
    </div>
  )
}

export default Header