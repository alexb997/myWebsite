import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
