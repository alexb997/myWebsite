import React, { useEffect, useState } from "react";
import "./CustomCursor.css";
import NavBar from "../navigation/NavBar";
import AppRouter from "../routing/AppRouter";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-effect">
      <div
        className="cursor"
        style={{ left: position.x, top: position.y }}
      ></div>

    </div>
  );
}

export default CustomCursor;
