const Card = (props) => {
    return (
        <div>
            <img src={props.image}/>
            <h2>{props.text}</h2>
        </div>
    )
}

export default Card