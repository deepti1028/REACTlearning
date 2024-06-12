import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <>
      <div className="bg-pink-200">hello</div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
