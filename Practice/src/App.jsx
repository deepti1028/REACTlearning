import { useEffect, useState, useCallback, useRef } from "react";
function App() {
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const copyPass = useRef(null);
  const passwordGenerator = useCallback(() => {
    let newPasswrod = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (character) str += "!@#$%^";
    if (number) str += "12345";
    for (let i = 0; i < length; i++) {
      let ind = Math.floor(Math.random() * str.length);
      newPasswrod += str.charAt(ind);
    }
    setPassword(newPasswrod);
  }, [character, number, length]);
  useEffect(() => {
    passwordGenerator();
  }, [character, number, length]);
  const copyClipboard = useCallback(() => {
    copyPass.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white-500 bg-gray-400">
        <h1 className="text-white text-center my-3">Text Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="Password"
            value={password}
            readOnly
            ref={copyPass}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyClipboard}
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
              className="curson-pointer"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label> Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberedIP"
              onClick={(e) => setNumber((prev) => !prev)}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterIP"
              onClick={(e) => {
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
