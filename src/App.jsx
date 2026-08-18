import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Textform from './components/Textform';
import Contact from './pages/Contact';
import TextTools from './pages/TextTools';
import WordCounter from './pages/WordCounter';
import TextEditor from "./pages/TextEditor";

import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>

      <div className={darkMode ? 'dark-mode' : 'light-mode'}>

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/text-tools" element={<TextTools />} />
          <Route path="/form" element={<Textform />} />

          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/text-tools" element={<TextEditor />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;