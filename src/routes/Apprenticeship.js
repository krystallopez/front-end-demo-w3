import React from "react";
import { Link } from "react-router-dom";

function Apprenticeship() {
  return (
    <div>
      <h1>A little info about my apprenticeship</h1>
      <Link to="/about">Collapse Info</Link>
    </div>
  );
}

export { Apprenticeship };