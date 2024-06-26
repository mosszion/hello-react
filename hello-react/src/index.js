import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';




const Button = (props) => {
  // your code here
  const{onClick} = props;

    // your code here
  
  return (
    <button onClick = {onClick}>
      {props.children}
      </button>
  )
};

const Application = () => {

  // your code here
const [name, setName] = useState("")
  const reset = () => {
    setName("");
    // your code here
  };

  return (
    <div> 
          <input 
          value = {name} 
          onChange = {(event) => setName(event.target.value)} 
          placeholder='Type your Name'
          >

          </input>
          <button onClick = {reset}>Reset</button>
          <main>
            {/* your code here -- this entire line including the curly braces can be removed */}
            <h1>Hello {name}</h1>
          </main>

    </div>
  );
};
ReactDOM.render(
  <>
    <Application />
  </>
, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

