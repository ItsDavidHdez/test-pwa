import { Agencia } from "./Agencia";
import { Camioneta } from "./Camioneta";
import { ItemProvider } from "./context/ItemContext";

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <Agencia />
        <Camioneta />
      </ItemProvider>
    </div>
  );
}

export default App;
