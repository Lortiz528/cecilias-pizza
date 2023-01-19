import './App.css';
import Navv from './components/Nav/Navv';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navv />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
