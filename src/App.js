import "./App.css";
import React from "react";

function App() {
  const [color, setColor] = React.useState(
    JSON.parse(sessionStorage.getItem("color")) || "blue"
  ); //using hooks for function component
  const [count, setCount] = React.useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );
  console.log(color);
  console.log(count);

  React.useEffect(() => {
    sessionStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("count", JSON.stringify(count));
  }, [color, count]);

  return (
    <div>
      {/* this component has 2 children that display a message and a clock*/}
      <DisplayMessage color={color} />
      <Clock time={new Date().toLocaleTimeString()} />
      <p>{count}</p>
      <button
        onClick={() => {
          setColor(toggle(color));
          setCount(count + 1);
        }}
      >
        Change Color React
      </button>
    </div>
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

function Clock(props) {
  return <p> React Clock: {props.time} </p>;
}
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Main />); //first load
//setInterval(() => root.render(<Main />), 1000);

export default App;
