import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Greet() {
  // accessing params
  const params = useParams();

  // grab the navigte functionality
  const navigate = useNavigate();

  // onClick function, navigate to another page
  function handleClick() {
    navigate("/about");
  }

  return (
    <div>
      <h1>Hello, {params.name}!</h1>
      <div className="d-flex flex-column align-items-start">
        <Link to="/">Go back Home</Link>
        <button type="button" className="btn btn-success mt-3" onClick={handleClick}>
          Check out the about page using useNavigate
        </button>
      </div>
    </div>
  );
}

export { Greet };
