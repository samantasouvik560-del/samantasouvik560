import { useState } from "react";

export default function TextAnalyzer() {
  const [text, setText] = useState("");

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const characters = text.length;

  const charactersNoSpaces = text.replace(/\s/g, "").length;

  const sentences = text.trim()
    ? text.split(/[.!?]+/).filter(sentence => sentence.trim()).length
    : 0;

  const paragraphs = text.trim()
    ? text.split(/\n\s*\n/).filter(paragraph => paragraph.trim()).length
    : 0;

  const readingTime = Math.max(1, Math.ceil(words / 200));

  return (
    <div className="page" style={{ padding: "50px 7%", minHeight: "calc(100vh - 70px)" }}>
      <h1>Text Analyzer</h1>

      <p>
        Analyze your text and get useful information instantly.
      </p>

      <textarea
        className="text-editor-area"
        placeholder="Paste or write your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="text-info">

        <div>
          Words: <strong>{words}</strong>
        </div>

        <div>
          Characters: <strong>{characters}</strong>
        </div>

        <div>
          Characters without spaces:{" "}
          <strong>{charactersNoSpaces}</strong>
        </div>

        <div>
          Sentences: <strong>{sentences}</strong>
        </div>

        <div>
          Paragraphs: <strong>{paragraphs}</strong>
        </div>

        <div>
          Reading Time: <strong>{readingTime} min</strong>
        </div>

      </div>

    </div>
  );
}