import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Hero } from './Components/Hero';

function App() {
  const itemsfooter=["COMING SOON","A HYPER-CURATED SYNC MARKETPLACE WITH THE BEST LABELS","R-CURATED SYNC MARKETPLACE WITH THE BEST LABELS"]
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Footer items={itemsfooter}/>{/* Demostracion uso de props */}
    </div>
  );
}

export default App;
