import { useState } from "react";

const ConditionalRender = () => {
  return (
    <div>
      <Short />
    </div>
  );
};

const IfStatement = () => {
  const [bool, setBool] = useState(false);
  if(bool){
      return (
          <div>
              <h1>bool is true</h1>
              <button onClick={() => setBool(!bool)}>click</button>
          </div>
      )
  }
  return (
    <div>
        <h1>bool is false</h1>
      <button onClick={() => setBool(!bool)}>click</button>
    </div>
  );
};

const Ternary = () => {
  const [bool, setBool] = useState(true);

  return (
    <div>
        { bool ? <h1>bool is true</h1> : <p>bool is false</p> }
      <button onClick={() => setBool(!bool)}>click</button>
    </div>
  );
};

const Short = () => {
  const [bool, setBool] = useState(true);
  return (
    <div>
        { bool && <h1>bool is true</h1> }
      <button onClick={() => setBool(!bool)}>click</button>
    </div>
  );
};

export default ConditionalRender;
