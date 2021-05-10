import React, { useState, createContext, useEffect } from "react"
import axios from "axios"

export const MovieSearchContext = createContext()

export const MovieSearchResult = props => {
    const [movies, setMovies] = useState([])
    const [bannerVisibility, setBannerVisibility] = useState(false)
    const [nominationList, setnominationList] = useState([])
    useEffect(() => {
        axios.get("/api/nominations")
            .then(data => {

                const nominated = data.data
                if (nominated.length == 4) {
                    setBannerVisibility(true)
                }
                setnominationList(nominated)


            })
    }, [])


    return (
        <MovieSearchContext.Provider value={[movies, setMovies, bannerVisibility, setBannerVisibility, nominationList, setnominationList]}>
            {props.children}

        </MovieSearchContext.Provider>
    )
}

