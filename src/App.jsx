import RecebeContexto from "./components/RecebeContexto";
import Contexto from "./components/Contexto";
import Filho from "./components/Filho";

function App() {
  return (
    <div className="App">
      <Contexto>
        <RecebeContexto />
        <Filho/>
      </Contexto>
    </div>
  );
}

export default App;
