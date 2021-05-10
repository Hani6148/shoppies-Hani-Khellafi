import React, { Component } from 'react'
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import axios from "axios"
import NominatedButton from "./NominatedButton"
import NominatedListItem from "./NominatedListItem"
import "./Header.css"
import shortid from 'shortid';



class Header extends Component {

    state = {
        nominationList: [],
        nominationVisible: false
    }


    componentDidMount() {
        axios.get("/api/nominations")
            .then(data => {
                this.setState({ nominationList: data.data })
                console.log(this.state.nominationList)

            })
    }

    showNominations = (e) => {
        if (this.state.nominationVisible) {
            this.setState({ nominationVisible: false })
        }
        else {
            this.setState({ nominationVisible: true })
        }
    }


    render() {
        const defaultPoster = "https://lh6.googleusercontent.com/proxy/hIgFSMyx4VsuoQh8h-ZfI3IiK9uFSLZ7pG67H_1RwEBDEPiWX-odcJ0PkWriAPeqwKyC6n-12UTrNmQF2ul9DAjwKMljG3zSCCTDoTVDPexFHV9l_JD5WMbmpnUJqWLqYA=s0-d"
        const numberofNominations = this.state.nominationList.length
        const nominationList = this.state.nominationList
        const nominationVisible = this.state.nominationVisible
        return (
            <div className="header" >
                <Logo />
                <SearchBar />
                <NominatedButton numberofNominations={numberofNominations} showNominations={this.showNominations} />
                <div class={`row  ${nominationVisible ? "nominated-container-visible" : "nominated-container-hidden"}`}>
                    {nominationList.map((movie, i) => {

                        let poster = true
                        if (movie.Poster == "N/A") {
                            poster = false
                        }
                        return (<NominatedListItem key={shortid.generate()} movieImg={poster ? movie.poster : defaultPoster} movieTitle={movie.title} movieYear={movie.year} />)
                    })
                    }
                </div>

            </div >
        )
    }
}

export default Header