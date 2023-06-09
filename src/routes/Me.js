import React from "react";
import { Link } from "react-router-dom";

function Me() {
  return (
    <div>
      <h1>A little more about me</h1>
      <Link to="/about">Collapse Info</Link>
    </div>
  );
}

export { Me };