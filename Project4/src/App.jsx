import "./App.css";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div>hello</div>
    </UserContextProvider>
  );
}

export default App;
