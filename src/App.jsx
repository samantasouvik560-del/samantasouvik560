import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';
import Textform from "./components/Textform";
import AITextImprover from "./pages/AITextImprover";
import TextTools from "./pages/TextTools";
import TextEditor from "./pages/TextEditor";
import TextAnalyzer from "./pages/TextAnalyzer";
import WordCounter from "./pages/WordCounter";
import QuickNotes from "./pages/QuickNotes";
import ContinueLearning from "./pages/ContinueLearning";
function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>

      <div className={darkMode ? "dark-mode" : "light-mode"}>

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/form" element={<Textform />} />

          <Route path="/text-tools" element={<TextTools />} />

          <Route path="/text-editor" element={<TextEditor />} />

          <Route
            path="/text-analyzer"
            element={<TextAnalyzer />}
          />
                <Route
                    path="/quick-notes"
                    element={<QuickNotes />}
                    />
          <Route
            path="/word-counter"
            element={<WordCounter />}
          />
          <Route
  path="/ai-text-improver"
  element={<AITextImprover />}
/>
            <Route
  path="/continue-learning"
  element={<ContinueLearning />}
/>

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;