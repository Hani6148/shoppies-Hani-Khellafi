import React from 'react'

function SearchInput(props) {
    return (
        <input
            type="text"
            name="movieInput"
            value={props.movieInput}
            className="form-control search-input"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
            onChange={e => {
                const value = e.target.value
                props.setMovieInput(value)
            }}
        />
    )
}

export default SearchInput