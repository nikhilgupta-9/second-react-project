import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  return (
    <>
      <h1>Counter  {count}</h1>
      <div>
        <p>Count is {count}</p>
        <button onClick={()=>{
          setCount(count + 1)
        }} style={{ margin: "0px 10px" }}>Increase</button>
        <button 
        onClick={()=>setCount((count)=>Math.max(count - 1, 0))}
        style={{ margin: "0px 10px" }}>Decrease</button>

        <button 
        onClick={()=> setCount(0)}
        style={{ margin: "0px 10px" }}>Reset</button>
      </div>
      <div style={{ margin: "20px 15px" }}>
        <input
          type="text"
          placeholder="Enter your Value ..."
          style={{
            padding: "10px 12px",
            border: "1px solid yellow",
            borderRadius: "10px",
          }}
          value={countToSet}
          onChange={(e)=>{setCountToSet(Number(e.target.value))}}
        />
        <button
        onClick={()=>{
          setCount(Number(countToSet));
          setCountToSet(0);
        }}
         style={{ margin: "0px 10px" }}>Set Value {countToSet}</button>
      </div>
    </>
  );
}

export default App;
