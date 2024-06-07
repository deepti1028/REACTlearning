import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const pswrdRef = useRef(null);
  const copyPswrdToClip = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);
  const pswrdGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pswrd = "";
    if (number) str += "123456789";
    if (character) str += "!@#$$%^&*";
    for (let i = 0; i < length; i++) {
      let ind = Math.floor(Math.random() * str.length + 1);
      pswrd += str.charAt(ind);
    }
    setPassword(pswrd);
  }, [character, number, length]);

  useEffect(() => {
    pswrdGenerator();
  }, [length, pswrdGenerator, character, number]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white-500 bg-gray-500">
        <h1 className="text-white text-center my-3">Text Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={pswrdRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPswrdToClip}
          >
            COPY
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="curson-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberedIP"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterIP"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
