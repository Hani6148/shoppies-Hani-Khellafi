import React, { useState, useContext } from 'react'
import { MovieSearchContext } from "./../../../context/MovieSearchContext"
import axios from "axios"
import SearchButton from './SearchButton'
import SearchInput from './SearchInput'
import "./SearchBar.css"
const API_URL = "https://www.omdbapi.com/?";
const API_KEY = "4379d9ae";
const queryType = "Movie";


function SearchBar() {


    const [movieInput, setMovieInput] = useState("")
    const [movies, setMovies] = useContext(MovieSearchContext)
    const buttonSubmit = e => {

        axios.get(`${API_URL}s=${movieInput}&type=${queryType}&apikey=${API_KEY}&plot="full"`)
            .then(response => {
                const searchResponse = response.data.Search

                setMovies(preMovies => searchResponse)

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (


        <div className="input-group mb-3 search-bar">
            <div className="input-group-prepend">
                <SearchButton handleSubmit={buttonSubmit} />
            </div>
            <SearchInput movieInput={movieInput} setMovieInput={setMovieInput} />
        </div>

    )
}

export default SearchBar