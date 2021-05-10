import React from 'react'
import "./NominatedButton.css"
function NominatedButton(props) {


    return (
        <button type="button" class="btn btn-primary nomButton" onClick={props.showNominations}>
            Nominated <span class="badge badge-light">{props.numberofNominations}</span>
        </button>
    )
}

export default NominatedButton