import React from "react";

const Model = ({ handleAge }) => {
  const data = { name: "tuhin", age: 39, isJob: true };
  return (
    <div>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
      <button className="btn" onClick={() => handleAge(data.age)}>
        Change age
      </button>
    </div>
  );
};

export default Model;
