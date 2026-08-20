import { useState } from "react";
import "./FindReplace.css";

export default function FindReplace() {
  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [matchCount, setMatchCount] = useState(null);

  const countMatches = () => {
    if (!findText) return 0;
    return text.split(findText).length - 1;
  };

  const handleFind = () => {
    setMatchCount(countMatches());
  };

  const handleReplaceOne = () => {
    if (!findText) return;

    const index = text.indexOf(findText);
    if (index === -1) {
      setMatchCount(0);
      return;
    }

    const updated =
      text.slice(0, index) +
      replaceText +
      text.slice(index + findText.length);

    setText(updated);
    setMatchCount(countMatches() - 1);
  };

  const handleReplaceAll = () => {
    if (!findText) return;

    setText(text.split(findText).join(replaceText));
    setMatchCount(0);
  };

  const handleClear = () => {
    setText("");
    setFindText("");
    setReplaceText("");
    setMatchCount(null);
  };

  return (
    <div className="find-replace-page">

      <div className="find-replace-header">
        <h1>Find &amp; Replace</h1>
        <p>Find specific text inside your content and replace it instantly.</p>
      </div>

      <div className="find-replace-container">

        <div className="text-section">
          <label htmlFor="source-text">Your Text</label>
          <textarea
            id="source-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your text here..."
          />
        </div>

        <div className="controls">
          <div className="input-group">
            <label htmlFor="find-input">Find</label>
            <input
              id="find-input"
              value={findText}
              onChange={(e) => setFindText(e.target.value)}
              placeholder="Text to find..."
            />
          </div>

          <div className="input-group">
            <label htmlFor="replace-input">Replace With</label>
            <input
              id="replace-input"
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
              placeholder="Replacement text..."
            />
          </div>
        </div>

        <div className="buttons">
          <button className="find-btn" onClick={handleFind}>
            Find
          </button>

          <button className="replace-btn" onClick={handleReplaceOne}>
            Replace Next
          </button>

          <button className="replace-all-btn" onClick={handleReplaceAll}>
            Replace All
          </button>

          <button className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>

        {matchCount !== null && (
          <div className="result">
            <p>
              {matchCount > 0
                ? `${matchCount} match${matchCount === 1 ? "" : "es"} found.`
                : "No matches found."}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}