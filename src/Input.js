import { useState } from "react"

const Input = () => {
    const [userInput, setUserInput] = useState("")

    const changeHandler = (event) => {
        setUserInput(event.target.value)
    }
    return (
        <>
            <h1>input js</h1>
            <input onChange={changeHandler}></input>
            <h2>{userInput}</h2>
        </>
    )
}
export default Input