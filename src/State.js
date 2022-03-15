import { useState } from "react"

const State = () => {

    const [persons, setPersons] = useState([
        { name: "Dan", age: "34" },
        { name: "Ben", age: "27"}
    ])

    const handleClick = (name) => {
        alert(`hello ${name}`)
    }

    return (
        <div>
            <h1>im state</h1>
            <Person 
                name={persons[1].name}
                age={persons[1].age}
                clickMe={handleClick}
            />
             <Person 
                name={persons[0].name}
                age={persons[0].age}
                clickMe={handleClick}
            />
        </div>
    )
}

const Person = ({ name, age, clickMe }) => {
    return (
    <div>
        <h1>{name}</h1>
        <p>{age}</p>
        <button onClick={() => clickMe(name)}>clicker</button>
    </div>
    )
}

export default State