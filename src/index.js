import React from "react";
import ReactDOM from "react-dom";

let name = "Olayinka";
let surname = "Olatunji";

ReactDOM.render(
  <>
    <h1>{name + " " + surname}</h1>
    <h2>
      Good morning {name}. The Sum of 2 + 9 = {2 + 9}
      <br />
      And the newest random number is: {Math.floor(Math.random() * 11)}
    </h2>
  </>,
  document.getElementById("root")
);
