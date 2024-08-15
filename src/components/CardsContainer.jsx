import React from "react";
import Card from "./Card";

const CardsContainer = ({ personajes }) => {
  return (
    <div className="row container my-3">
      {personajes.map((item) => (
        <Card key={item.id} item = {item} />
      ))}
    </div>
  );
};

export default CardsContainer;
