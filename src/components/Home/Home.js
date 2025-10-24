import React, {useState} from "react";
import Class from "../Class/Class"
import "./Home.css"

function Home(props) {
    let [value, setValue] = useState("wahh");
    let [favouriteClasses, setClasses] = useState([])

    

    let handleValue = (event) => {
        setValue(event.target.value)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        if (!favouriteClasses.includes(value)) {
            setClasses(favouriteClasses.concat(value))
            setValue("")
            
        }
        console.log(favouriteClasses)
        
    }

    let handleDelete = (e) => {
        console.log(e.target.name);
        const delIndex = favouriteClasses.findIndex((i) => i === e.target.name)
        setClasses(favouriteClasses.filter((_, i) => {
            return i !== delIndex
        }))
    }
    
    return (
        <div>
            <h1>Favourite Classes</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Add favourite classes
                    <input type = "text" onChange={handleValue}></input>
                </label>
                
                <button type = "submit">Add Class!</button>
            </form>
            <div className="class-container">
                {favouriteClasses.map((favClass) => {
                    return <Class name={favClass} key={favClass} fav={favClass} delHandler={handleDelete}></Class>
                })}
            </div>
        </div>
        
    )
}

export default Home