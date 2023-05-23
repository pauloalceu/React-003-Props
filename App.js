import './App.css';
import DigaMeuMome from './components/helloworld'; 

function App() {

  const nome = 'Hello World';

  return (
    <div className="App">
      {nome}
      <DigaMeuMome></DigaMeuMome>
      <br/> oi
      <DigaMeuMome/>
      <DigaMeuMome nome="paulo"/>
      <DigaMeuMome nome="joão"/>
    </div>
  );
}

export default App;
