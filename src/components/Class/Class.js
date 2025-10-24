import "./Class.css"
import React, {useState, useEffect} from "react"

function Class(props) {
    
    const [classInfo, setClassInfo] = useState({});

    const url = "https://anteaterapi.com/v2/rest/courses/";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url + props.name)
            const data = await response.json();
            console.log(data);
        }

        

        fetchData()
    })

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