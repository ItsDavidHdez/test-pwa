import React, { useState, useRef } from "react";
import { ItemContext } from "./context/ItemContext";

const Agencia = () => {
  const { item } = React.useContext(ItemContext);

  const [modeloState, setModeloState] = useState(item.modelo);
  const [marcaState, setMarcaState] = useState(item.marca);
  const [agenciaState, setAgenciaState] = useState(item.agencia);

  let loading = useRef("");

  React.useEffect(() => {
    if (!modeloState || !marcaState || !agenciaState) {
      loading.current = "Sin datos... :(";
    }
  }, [modeloState, marcaState, agenciaState]);

  return (
    <>
      <h1>Agencia</h1>
      {!loading.current ? (
        <p>
          {modeloState}, {marcaState}, {agenciaState}
        </p>
      ) : (
        <p>{loading.current}</p>
      )}
    </>
  );
};

export { Agencia };
