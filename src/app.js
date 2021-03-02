import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

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
  const theme = useState("peru");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">
              <h1 id="something-important">Adopt Me!</h1>
            </Link>
          </header>

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
