import React from "react";

function MenuItem({ image, name, price,nameStore }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price}
      <span>{nameStore}</span>

      </p>
    </div>
  );
}

export default MenuItem;
