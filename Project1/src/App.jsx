import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const pswrdGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pswrd = "";
    if (number) str += "123456789";
    if (character) str += "!@#$$%^&*";
    for (let i = 0; i < lengtj; i++) {
      let ind = Math.floor(Math.random() * str.length() + 1);
      pswrd += str.charAt(ind);
    }
    setPassword(pswrd);
  }, [character, number, length, setPassword]);
  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
    </>
  );
}

export default App;
