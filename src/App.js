import React from "react";

const App = () => {
  const [text, setText] = React.useState();

  let loading;

  React.useEffect(() => {
    loading ? setText("Loading...") : setText("All ready");
    console.log("Estoy renderizando");
  }, [loading]);

  return (
    <div>
      <h1>Activity 1</h1>
      <h2>{text}</h2>
    </div>
  );
};

export { App };
