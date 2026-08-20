import { useState } from "react";

export default function AITextImprover() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const improveText = () => {
    if (!text.trim()) {
      alert("Please enter some text first.");
      return;
    }

    // Temporary demo result
    setResult(
      "✨ AI improvement will appear here.\n\nYour text has been received successfully. Connect an AI API later to generate the actual improved version."
    );
  };

  const copyText = () => {
    if (!result) return;

    navigator.clipboard.writeText(result);

    alert("Copied!");
  };

  const clearText = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="ai-improver-page">

      {/* HEADER */}

      <section className="ai-improver-header">

        <div className="ai-badge">
          ✦ SOUVIK HUB / AI TOOLS
        </div>

        <h1>
          AI Text <span>Improver</span>
        </h1>

        <p>
          Improve your writing, clarity and readability
          with AI-powered assistance.
        </p>

      </section>


      {/* WORKSPACE */}

      <section className="ai-workspace">

        {/* INPUT */}

        <div className="ai-box">

          <div className="ai-box-header">
            <span>YOUR TEXT</span>

            <span>
              {text.length} characters
            </span>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write or paste your text here..."
          />

        </div>


        {/* ARROW */}

        <div className="ai-arrow">
          ✨
        </div>


        {/* RESULT */}

        <div className="ai-box">

          <div className="ai-box-header">

            <span>AI RESULT</span>

            <button
              onClick={copyText}
              disabled={!result}
            >
              📋 Copy
            </button>

          </div>

          <textarea
            value={result}
            readOnly
            placeholder="Your improved text will appear here..."
          />

        </div>

      </section>


      {/* ACTIONS */}

      <div className="ai-actions">

        <button
          className="ai-clear-btn"
          onClick={clearText}
        >
          Clear
        </button>

        <button
          className="ai-improve-btn"
          onClick={improveText}
        >
          ✨ Improve Text →
        </button>

      </div>


      {/* INFO */}

      <section className="ai-info">

        <div>
          ✨
          <strong>Improve Writing</strong>
          <p>Make your sentences clearer.</p>
        </div>

        <div>
          🧠
          <strong>Better Clarity</strong>
          <p>Make difficult text easier to understand.</p>
        </div>

        <div>
          🚀
          <strong>Save Time</strong>
          <p>Improve your writing faster.</p>
        </div>

      </section>

    </div>
  );
}