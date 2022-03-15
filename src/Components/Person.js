import FavMovie from "./FavMovie";

const Person = (props) => {
  
  return (
    <div style={{ border: "solid 4px red" }}>
      <h3>{props.firstName}</h3>
      <FavMovie favMovie={props.favMovie}/>
    </div>
  );
};

export default Person
