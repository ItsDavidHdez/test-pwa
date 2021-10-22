import React from "react";
import { ItemContext } from "./context/ItemContext";

const Camioneta = () => {
  const { item } = React.useContext(ItemContext);

  return (
    <>
      <h1>Camioneta</h1>
    </>
  );
};

export { Camioneta };
