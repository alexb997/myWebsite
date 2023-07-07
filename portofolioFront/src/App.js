import "./App.css";
import CustomCursorManager from "./components/customCursor/context/manager";
import NavBar from "./components/navigation/NavBar";
import AppRouter from "./components/routing/AppRouter";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
