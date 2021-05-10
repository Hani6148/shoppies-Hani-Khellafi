import React, { useState, useContext } from 'react'
import { MovieSearchContext } from "./../../context/MovieSearchContext"
import MovieCard from "./MovieCard"
import shortid from 'shortid';

import "./MovieCardGroup.css"

function MovieCardGroup() {



    const [movies, setMovies] = useContext(MovieSearchContext)
    const defaultPoster = "https://lh6.googleusercontent.com/proxy/hIgFSMyx4VsuoQh8h-ZfI3IiK9uFSLZ7pG67H_1RwEBDEPiWX-odcJ0PkWriAPeqwKyC6n-12UTrNmQF2ul9DAjwKMljG3zSCCTDoTVDPexFHV9l_JD5WMbmpnUJqWLqYA=s0-d"
    console.log(movies)
    return (
        <div class="row movie-container">
            {   movies.map((movie, i) => {

                let poster = true
                if (movie.Poster == "N/A") {
                    poster = false
                }
                return (<MovieCard key={shortid.generate()} movieImg={poster ? movie.Poster : defaultPoster} movieTitle={movie.Title} movieYear={movie.Year} />)
            })
            }
        </div>
    )
}

export default MovieCardGroup