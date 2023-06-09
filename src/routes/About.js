import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>This is a React Router app!</h1>
      <h2>🚀 nice!</h2>
      <Link to="/">Go back Home</Link> | <Link to="me"> Me</Link> | <Link to="apprenticeship">Apprenticeship</Link>
      <Outlet/>
    </div>
  );
}

export { About };
