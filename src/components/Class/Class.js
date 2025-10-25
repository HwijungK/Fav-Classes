import "./Class.css"
import React, {useState, useEffect} from "react"

function Class(props) {
    
    const [classInfo, setClassInfo] = useState({});

    const url = "https://anteaterapi.com/v2/rest/courses/";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url + props.name)
            const data = await response.json();
            console.log(data)
            setClassInfo(data);
        }
        fetchData()
    }, [props.name])

    let info;
    if (classInfo.ok) {
        info = <div className="classInfo">
            <p className="courseName">{classInfo.data.title}</p>
            <p className="dep">{classInfo.data.department}</p>
            <p className="desc">{classInfo.data.description}</p>
        </div>
    } else {
        info = <div>Class Not Found</div>
    }

    return (
        <div className="class">
            <h2 className="title">{props.name}</h2>
            <div>{info}</div>
            <button type="button" name={props.name} onClick = {props.delHandler}>
                Delete Class
            </button>
        </div>
    )
}

export default Class;