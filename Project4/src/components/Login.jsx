import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [name, setName] = useState("");
  const [paswrd, setPaswrd] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, paswrd });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={paswrd}
        onChange={(e) => setPaswrd(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
