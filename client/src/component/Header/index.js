import React, { useEffect, useState } from 'react'
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import axios from "axios"
import NominatedButton from "./NominatedButton"
import NominatedListItem from "./NominatedListItem"
import "./Header.css"

function Header() {
    const [nominationList, setnominationList] = useState([])

    useEffect(() => {
        axios.get("/api/nominations")
            .then(data => {
                const nominated = data.data
                setnominationList(nominated)



            })
    }, [])




    return (
        <div className="header">
            <Logo />
            <SearchBar />
            <NominatedButton />
            <div class="row nominated-container">
                {/* {movies.map((movie, i) => {

                    let poster = true
                    if (movie.Poster == "N/A") {
                        poster = false
                    }
                    return (<NominatedListItem key={shortid.generate()} movieImg={poster ? movie.poster : defaultPoster} movieTitle={movie.title} movieYear={movie.year} />)
                })
                } */}
            </div>

        </div >
    )
}

export default Header