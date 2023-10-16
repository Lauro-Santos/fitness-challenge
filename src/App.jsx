import "styles/styledefault.css";
import Cabecalho from "components/Cabecalho";
import Cartoes from "components/Cartoes";
import SobreNos from "components/SobreNos";
import Perguntas from "components/Perguntas";
import Rodape from "components/Rodape";

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <main>
        <Cartoes/>
        <SobreNos/>
        <Perguntas/>
      </main>
      <Rodape/>
    </div>
  );
}

export default App;
