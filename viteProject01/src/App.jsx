import { useState } from "react";
import "./main.css";
function App() {
  const [colour, setColour] = useState("pink");
  return (
    <>
      <div className="home" style={{ backgroundColor: colour }}></div>
      <div>
        <button
          onClick={() => {
            setColour("Red");
          }}
        >
          Red
        </button>
        <button>Pink</button>
        <button>Blue</button>
        <button>Lavender</button>
        <button>Gray</button>
      </div>
    </>
  );
}

export default App;
