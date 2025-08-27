import React from "react";
import "./TechnologiesView.css";
function TechnologiesView({ technologies }) {
  return (
    <div className="TechnologiesView">
      <h1>{technologies.name}</h1>
      <h2>{technologies.description}</h2>
      <img src={technologies.image} alt={technologies.name + " image"} />
    </div>
  );
}

export default TechnologiesView;
