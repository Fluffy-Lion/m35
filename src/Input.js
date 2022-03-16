import { useState } from "react"

const Input = () => {
    const [userInput, setUserInput] = useState("")

    const changeHandler = (event) => {
        setUserInput(event.target.value)
    }
    return (
        <div>
            <h1>input js</h1>
            <input onChange={changeHandler}></input>
            <h2>{userInput}</h2>
        </div>
    )
}
export default Input