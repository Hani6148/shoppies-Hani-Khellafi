import React, { useState, createContext } from "react"

export const MovieSearchContext = createContext()

export const MovieSearchResult = props => {
    const [movies, setMovies] = useState([])

    return (
        <MovieSearchContext.Provider value={[movies, setMovies]}>
            {props.children}

        </MovieSearchContext.Provider>
    )
}

