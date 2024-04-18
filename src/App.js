import logo from './logo.svg';
import './App.css';
import MainNavigation from './componets/MainNavigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipes from './views/Recipes';
import Features from './views/Features';
import About from './views/About';
import Home from './views/home';



function App() {
  return (
    <div className="App">
    
      <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
