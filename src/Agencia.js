import React, { useState, useRef } from "react";

const Agencia = ({ modelo, marca, agencia }) => {
  const [modeloState, setModeloState] = useState(modelo);
  const [marcaState, setMarcaState] = useState(marca);
  const [agenciaState, setAgenciaState] = useState(agencia);

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
