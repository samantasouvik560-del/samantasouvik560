import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const characters = text.length;

  const charactersNoSpaces = text.replace(/\s/g, "").length;

  const lines = text
    ? text.split("\n").length
    : 0;

  const sentences = text.trim()
    ? text.split(/[.!?]+/).filter(s => s.trim()).length
    : 0;

  const readingTime = Math.max(1, Math.ceil(words / 200));

  const clearText = () => {
    setText("");
  };

  return (
    <div className="counter-page">

      {/* HEADER */}

      <div className="counter-header">

        <div>
          <div className="counter-badge">
            ✦ SOUVIK HUB / TEXT TOOLS
          </div>

          <h1>
            Word <span>Counter</span>
          </h1>

          <p>
            Count words, characters and sentences while you write.
          </p>
        </div>

        <button
          className="counter-clear"
          onClick={clearText}
        >
          Clear Text
        </button>

      </div>


      {/* MAIN EDITOR */}

      <div className="counter-workspace">

        <div className="counter-editor-header">

          <div>
            <span className="live-dot"></span>
            Live Analysis
          </div>

          <span>
            {characters} characters
          </span>

        </div>


        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="counter-textarea"
        />


        <div className="counter-editor-footer">

          <span>
            {words} words
          </span>

          <span>
            {sentences} sentences
          </span>

          <span>
            {readingTime} min read
          </span>

        </div>

      </div>


      {/* STATISTICS */}

      <div className="counter-section-title">

        <div>
          <span>ANALYTICS</span>
          <h2>Text Statistics</h2>
        </div>

        <p>
          Updated in real time
        </p>

      </div>


      <div className="counter-grid">

        {/* WORDS */}

        <div className="counter-card primary">

          <div className="counter-card-icon">
            Aa
          </div>

          <div className="counter-card-label">
            WORDS
          </div>

          <div className="counter-number">
            {words}
          </div>

          <p>
            Total words in your text
          </p>

        </div>


        {/* CHARACTERS */}

        <div className="counter-card">

          <div className="counter-card-icon">
            #
          </div>

          <div className="counter-card-label">
            CHARACTERS
          </div>

          <div className="counter-number">
            {characters}
          </div>

          <p>
            Including spaces
          </p>

        </div>


        {/* NO SPACES */}

        <div className="counter-card">

          <div className="counter-card-icon">
            ∅
          </div>

          <div className="counter-card-label">
            NO SPACES
          </div>

          <div className="counter-number">
            {charactersNoSpaces}
          </div>

          <p>
            Characters excluding spaces
          </p>

        </div>


        {/* SENTENCES */}

        <div className="counter-card">

          <div className="counter-card-icon">
            ¶
          </div>

          <div className="counter-card-label">
            SENTENCES
          </div>

          <div className="counter-number">
            {sentences}
          </div>

          <p>
            Sentences detected
          </p>

        </div>

      </div>


      {/* EXTRA INFO */}

      <div className="counter-bottom">

        <div>
          <span>READING TIME</span>
          <strong>{readingTime} min</strong>
        </div>

        <div>
          <span>LINES</span>
          <strong>{lines}</strong>
        </div>

        <div>
          <span>AVERAGE WORD LENGTH</span>
          <strong>
            {words
              ? (charactersNoSpaces / words).toFixed(1)
              : "0"}{" "}
            chars
          </strong>
        </div>

      </div>
    </div>
  );
}