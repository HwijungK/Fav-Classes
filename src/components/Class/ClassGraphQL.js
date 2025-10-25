import "./Class.css"
import React, {useState, useEffect} from "react"

function ClassGraphQL(props) {
    
    const [classInfo, setClassInfo] = useState({});

    const url = "https://anteaterapi.com/v2/graphql";

    useEffect(() => {
        const fetchData = async () => {
            const query = `
                query {
                    course(id: "${props.name}") {
                        title
                        title
                        departmentName
                        description
                    }
                }
            `

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({query}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json();
            console.log(Boolean(data.data.course.title))
            // if (data.data.course.title) console.log(data.data.course.title)
            setClassInfo(data.data.course);
        }
        fetchData()
    }, [props.name])

    let info;
    if (classInfo) {
        info = <div className="classInfo">
            <p className="courseName">{classInfo.title}</p>
            <p className="dep">{classInfo.departmentName}</p>
            <p className="desc">{classInfo.description}</p>
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

export default ClassGraphQL;