import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'Maria';
  return (
    <div className="App">
   
    
    <SayMyName nome="Lucas"/>
    <SayMyName nome={nome}/>
    <Pessoa
     nome="Lucas"
     idade="19"
     profissao="Num Tem"
     foto="https://via.placeholder.com/150"/>
    
    </div>

  );
}

export default App
