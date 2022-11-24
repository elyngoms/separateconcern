import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState(
    JSON.parse(sessionStorage.getItem("color")) || "blue"
  ); //using hooks for function component
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );
  //const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  console.log(color);
  console.log(count);

  useEffect(() => {
    sessionStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("count", JSON.stringify(count));
  }, [color, count]);

  return (
    <div>
      {/* this component has 2 children that display a message and a clock*/}
      <DisplayMessage color={color} />
      <Clock />
      <CounterDisplay count={count} />
      <UserActions
        setColor={setColor}
        setCount={setCount}
        count={count}
        color={color}
      />
    </div>
  );
}
function CounterDisplay(props) {
  return <p>{props.count}</p>;
}
function UserActions(props) {
  return (
    <button
      onClick={() => {
        props.setColor(toggle(props.color));
        props.setCount(props.count + 1);
      }}
    >
      Change Color React
    </button>
  );
}
function toggle(color) {
  if (color === "blue") {
    return "red";
  } else if (color === "red") {
    return "green";
  } else if (color === "green") {
    return "blue";
  }
}

function DisplayMessage(props) {
  return <h1 style={{ color: props.color }}>Hello React World! </h1>;
}

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      3000
    );
    return () => clearInterval(interval);
  }, [time]);
  return <p> React Clock: {time} </p>;
}
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Main />); //first load
//setInterval(() => root.render(<Main />), 1000);

export default App;
