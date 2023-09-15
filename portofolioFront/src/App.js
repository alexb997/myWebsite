import "./App.css";
import CustomCursor from "./components/customCursor/CustomCursor";
import NavBar from "./components/navigation/NavBar";
import AppRouter from "./components/routing/AppRouter";

function App() {
  return (
    <div className="App">
      <div class="area">
        <NavBar />
        <AppRouter />
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
