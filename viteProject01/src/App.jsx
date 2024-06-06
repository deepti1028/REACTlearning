import { useState } from "react";
function App() {
  let [count, setCount] = useState(1);
  const addValue = () => {
    count++;
    setCount(count);
  };
  const decreaseValue = () => {
    if (count > 0) count--;
    setCount(count);
  };
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Increace Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
