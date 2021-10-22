import React from "react";
import { Agencia } from "./Agencia";

const Camioneta = () => {
  const data = {
    modelo: "Ranger 4x4",
    marca: "Ford Ranger",
    agencia: "Ford",
  };

  return (
    <>
      <h1>Camioneta</h1>
      <Agencia modelo={data.modelo} marca={data.marca} agencia={data.agencia} />
    </>
  );
};

export { Camioneta };
