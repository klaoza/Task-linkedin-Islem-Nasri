import Navbar from './components/navbar';
import Bienvenue from './components/Bienvenue';
import Suggestions from './components/Suggestions';
import logo from "./logo.png";
import man from './man.png';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Navbar imgUrl={logo}/>
      <Bienvenue imgUrl={man} />
      <Suggestions/>
    </div>
  );
}

export default App;
