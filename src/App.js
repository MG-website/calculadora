import logo from './logo.svg';
import './App.css';
import { Calculadora } from './views/calculadora';
import { ContenedorStyled } from './components/styles';
import { Numeros } from './components/numeros';

function App() {
  return (
    <div className="App">

      <Calculadora></Calculadora>
    </div>
  );
}

export default App;
