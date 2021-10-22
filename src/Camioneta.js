import React from "react";
import { ItemContext } from "./context/ItemContext";

const Camioneta = () => {
  const { item, camioneta } = React.useContext(ItemContext);

  return (
    <>
      <h1>{camioneta}</h1>
    </>
  );
};

export { Camioneta };
