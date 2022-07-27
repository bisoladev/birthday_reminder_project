import React, { useState } from "react";
import data from "./data";
import List from "./list";
function App() {
  return (
    <main>
      <section className="container">
        <h3>0 Birthdays Today</h3>
        <List />
        <button type="button" onClick={() => console.log("You clicked me")}>
          Clear List
        </button>
      </section>
    </main>
  );
}

export default App;
