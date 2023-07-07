import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import CustomCursorManager from "../customCursor/context/manager";

function AppRouter() {
  return (
    <CustomCursorManager>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </CustomCursorManager>
  );
}

export default AppRouter;
