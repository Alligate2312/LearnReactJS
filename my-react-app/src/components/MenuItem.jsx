import React from "react";

function MenuItem({ id, name, price, favorite = false, onButtonClick }) {
  let icon = favorite == true ? "👍" : "";
  return (
    <div>
      <p>{`${id}. ${name} - ${price} VND ${icon}`}</p>
      <button onClick={() => onButtonClick(name)}>sayHi</button>
    </div>
  );
}

export default MenuItem;
