import "./Class.css"
import React, {useState} from "react"

function Class(props) {
    
    return (
        <div className="class">
            <h2>{props.name}</h2>
            <button type="button" name={props.name} onClick = {props.delHandler}>
                Delete Class
            </button>
        </div>
    )
}

export default Class;