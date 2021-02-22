import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

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
      <h1 id="something-important"></h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
