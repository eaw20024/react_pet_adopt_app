import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement(
  //   "div",
  //   { id: "something-important" },
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Fluffy",
  //     animal: "Dog",
  //     breed: "Poodle",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Parrot",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Zeus",
  //     animal: "Cat",
  //     breed: "Stray-Mixed",
  //   })
  // );
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Bird" breed="Parrot" />
      <Pet name="Scruffy" animal="Dog" breed="Poodle" />
      <Pet name="Minky" animal="Cat" breed="Mixed Breed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
