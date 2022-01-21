import './App.css';
import Form from './components/Form';
import Evento from './components/Evento';
function App() {
  const nome = 'Maria';
  return (
    <div className="App">
    <h1>Testando Eventos</h1>
    <Evento/>
    <Form/>
    </div>

  );
}

export default App
