import React, { useState } from "react";
import data from "./data.js";

const List = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <div className="">
        <div style={{ background: "#ffffff" }}>
          {people.map((person) => {
            const { id, name, age, image } = person;
            return (
              <div key={id}>
                <img src={image} alt="Celebrant" />
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default List;
