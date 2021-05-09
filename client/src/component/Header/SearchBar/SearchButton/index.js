import React from 'react'

function SearchButton(props) {
    return (

        <button className="btn btn-outline-secondary" type="button" onClick={props.handleSubmit}>
            Search
        </button>
    )
}

export default SearchButton