import React, { useEffect, useState, useContext } from 'react'
import { MovieSearchContext } from "./../../context/MovieSearchContext"

import Logo from "./Logo"
import SearchBar from "./SearchBar"
import axios from "axios"
import NominatedButton from "./NominatedButton"
import NominatedListItem from "./NominatedListItem"
import MaxBanner from "./MaxBanner"
import "./Header.css"


function Header() {

    const [, , bannerVisibility, setBannerVisibility, nominationList, setnominationList] = useContext(MovieSearchContext)
    const defaultPoster = "https://lh6.googleusercontent.com/proxy/hIgFSMyx4VsuoQh8h-ZfI3IiK9uFSLZ7pG67H_1RwEBDEPiWX-odcJ0PkWriAPeqwKyC6n-12UTrNmQF2ul9DAjwKMljG3zSCCTDoTVDPexFHV9l_JD5WMbmpnUJqWLqYA=s0-d"
    const [NominationVisibility, setNominationVisibility] = useState(false)

    //show and hide nomination on nomination-button click
    const showNominations = (e) => {

        if (NominationVisibility || nominationList.length == 0) {
            setNominationVisibility(false)
        }
        else {
            setNominationVisibility(true)
        }
    }

    return (
        <div className="header">
            {bannerVisibility ? (<MaxBanner />) : null}
            <div className="wrapper">
                <Logo />
                <SearchBar />
                <NominatedButton numberofNominations={nominationList.length} showNominations={showNominations} />
                <div class={`row nominated-container-${NominationVisibility ? "visible" : "hidden"}`}>
                    {nominationList.map((movie, i) => {

                        let poster = true
                        if (movie.Poster == "N/A") {
                            poster = false
                        }
                        return (<NominatedListItem setNominationVisibility={setNominationVisibility} Id={movie._id} key={movie._id} movieImg={poster ? movie.poster : defaultPoster} movieTitle={movie.title} movieYear={movie.year} />)
                    })
                    }
                </div>
            </div>

        </div >
    )
}

export default Header