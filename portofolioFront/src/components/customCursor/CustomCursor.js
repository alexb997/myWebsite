import React, { useEffect, useState } from "react";
import "./CustomCursor.css";
import NavBar from "../navigation/NavBar";
import AppRouter from "../routing/AppRouter";
import { Col } from "react-bootstrap";

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
    <div className="follower-effect">
      <div className="follower"></div>
      <div className="follower"></div>
      <div className="follower"></div>
      <div className="follower"></div>
      <div className="follower"></div>
      <div className="follower"></div>
      <div className="follower"></div>
      <div className="area">
        <Col>
          <NavBar />
          <AppRouter />
          <ul className="circles">
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
        </Col>
      </div>
    </div>
  );
}

export default CustomCursor;
