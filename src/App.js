import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';

function App() {
  const itemsfooter=["COMING SOON","A HYPER-CURATED SYNC MARKETPLACE WITH THE BEST LABELS","R-CURATED SYNC MARKETPLACE WITH THE BEST LABELS"]
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Footer items={itemsfooter}/>{/* Demostracion uso de props */}
        
    </div>
  );
}

export default App;
