import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({
  title = "Title for default",
  description = "Description for default",
}) {
  return (
    <div className="Card">
      <Link to={title}>
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>
    </div>
  );
}
export default Card;
