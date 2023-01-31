import './App.css';
import Navv from './components/Nav/Navv';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navv />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
