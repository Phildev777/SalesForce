import Connexion from "@pages/Connexion";
import SectionServices from "@pages/SectionServices";
import Home from "./pages/Home";
import "./assets/styles/services.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Connexion />
      <SectionServices />
    </div>
  );
}

export default App;
