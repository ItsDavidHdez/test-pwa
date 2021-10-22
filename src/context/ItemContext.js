import React from "react";

let ItemContext = React.createContext();
let { Provider, Consumer } = ItemContext;

const ItemProvider = ({ children }) => {
  let [item, setItem] = React.useState({
    modelo: "model",
    marca: "mark",
    agencia: "agency",
  });

  return (
    <>
      <Provider value={{ item }}>{children}</Provider>
    </>
  );
};

export { ItemProvider, Consumer as ItemConsumer, ItemContext };
