import React, { useState, useContext } from 'react'
import { MovieSearchContext } from "./../../../context/MovieSearchContext"
import axios from "axios"
import SearchButton from './SearchButton'
import SearchInput from './SearchInput'
import "./SearchBar.css"
import { useHistory } from 'react-router-dom';

const API_URL = "https://www.omdbapi.com/?";
const API_KEY = "4379d9ae";
const queryType = "Movie";


function SearchBar(props) {

    const history = useHistory();

    const [movieInput, setMovieInput] = useState("")
    const [error, setError] = useState(false)
    const [movies, setMovies] = useContext(MovieSearchContext)

    // initiating movie search
    const buttonSubmit = e => {


        axios.get(`${API_URL}s=${movieInput}&type=${queryType}&apikey=${API_KEY}&plot="full"`)
            .then(response => {
                const searchResponse = response.data.Search

                if (searchResponse) {
                    setMovies(preMovies => searchResponse)
                    setError(false)
                }
                else {
                    setMovies(preMovies => [])
                    setError(true)
                }
            })
            .catch(error => {
                console.log(error)
            })
        if (window.location.pathname || "/") {
            history.push('/')
        }
    }

    return (

        <div>
            <div className="input-group mb-3 search-bar">
                <div className="input-group-prepend">
                    <SearchButton handleSubmit={buttonSubmit} />
                </div>
                <SearchInput movieInput={movieInput} setMovieInput={setMovieInput} />

            </div>
            {error ? (<p style={{ color: "red", width: "fit-content", margin: "auto" }}>No Search Found</p>) : null}
        </div>
    )
}

export default SearchBar