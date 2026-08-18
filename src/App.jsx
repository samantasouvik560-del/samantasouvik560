import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import TextAnalyzer from "./pages/TextAnalyzer";
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
  <Route path="/text-editor" element={<TextEditor />} />
 <Route path="/text-analyzer" element={<TextAnalyzer />} />

  <Route path="/form" element={<Textform />} />
  <Route path="/word-counter" element={<WordCounter />} />
</Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;