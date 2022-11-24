import React, { useState, useEffect } from "react";
import { UserActions } from "./UserActions";
import { CounterDisplay } from "./CounterDisplay";
import { DisplayMessage } from "./DisplayMessage";
import { Clock } from "./Clock";

function Main() {
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
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Main />); //first load
//setInterval(() => root.render(<Main />), 1000);
export default Main;
