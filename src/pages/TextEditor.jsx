import { useEffect, useRef, useState } from "react";

export default function TextEditor() {
  const editorRef = useRef(null);

  const [title, setTitle] = useState("Untitled Document");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [saved, setSaved] = useState(true);

  // Update statistics
  const updateStats = () => {
    const editor = editorRef.current;

    if (!editor) return;

    const text = editor.innerText || "";

    const words = text.trim()
      ? text.trim().split(/\s+/).length
      : 0;

    setWordCount(words);
    setCharCount(text.length);
    setSaved(false);
  };

  // Formatting
  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);

    editorRef.current.focus();

    updateStats();
  };

  // New document
  const newDocument = () => {
    if (!saved) {
      const confirmNew = window.confirm(
        "You have unsaved changes. Create a new document?"
      );

      if (!confirmNew) return;
    }

    editorRef.current.innerHTML = "";
    setTitle("Untitled Document");
    setWordCount(0);
    setCharCount(0);
    setSaved(true);

    editorRef.current.focus();
  };

  // Save
  const saveDocument = () => {
    const data = {
      title,
      content: editorRef.current.innerHTML,
    };

    localStorage.setItem(
      "souvik-text-editor",
      JSON.stringify(data)
    );

    setSaved(true);
  };

  // Load saved document
  useEffect(() => {
    const savedData = localStorage.getItem(
      "souvik-text-editor"
    );

    if (savedData) {
      const data = JSON.parse(savedData);

      setTitle(data.title || "Untitled Document");

      if (editorRef.current) {
        editorRef.current.innerHTML = data.content || "";
      }

      setTimeout(() => {
        updateStats();
        setSaved(true);
      }, 0);
    }
  }, []);

  // Download TXT
  const downloadText = () => {
    const text = editorRef.current.innerText;

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `${title}.txt`;

    link.click();

    URL.revokeObjectURL(url);
  };

  // Print
  const printDocument = () => {
    window.print();
  };

  // Clear
  const clearDocument = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear the document?"
    );

    if (!confirmClear) return;

    editorRef.current.innerHTML = "";

    setWordCount(0);
    setCharCount(0);
    setSaved(false);

    editorRef.current.focus();
  };

  return (
    <div className="real-editor-page">

      <div className="real-editor-container">

        {/* TOP BAR */}
        <div className="editor-topbar">

          <div className="editor-brand">
            <div className="editor-logo">
              📝
            </div>

            <div>
              <input
                className="document-title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setSaved(false);
                }}
              />

              <div className="save-status">
                {saved ? "✓ Saved" : "● Unsaved changes"}
              </div>
            </div>
          </div>

          <div className="top-actions">

            <button onClick={newDocument}>
              New
            </button>

            <button onClick={saveDocument}>
              Save
            </button>

            <button onClick={downloadText}>
              Download
            </button>

            <button onClick={printDocument}>
              Print
            </button>

          </div>

        </div>


        {/* TOOLBAR */}
        <div className="editor-toolbar">

          {/* Undo / Redo */}
          <button onClick={() => formatText("undo")}>
            ↶
          </button>

          <button onClick={() => formatText("redo")}>
            ↷
          </button>

          <span className="toolbar-divider"></span>


          {/* Bold */}
          <button
            className="bold-btn"
            onClick={() => formatText("bold")}
          >
            B
          </button>

          {/* Italic */}
          <button
            className="italic-btn"
            onClick={() => formatText("italic")}
          >
            I
          </button>

          {/* Underline */}
          <button
            className="underline-btn"
            onClick={() => formatText("underline")}
          >
            U
          </button>

          <span className="toolbar-divider"></span>


          {/* Headings */}
          <select
            onChange={(e) =>
              formatText(
                "formatBlock",
                e.target.value
              )
            }
            defaultValue="p"
          >
            <option value="p">Normal</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
          </select>


          {/* Font Size */}
          <select
            onChange={(e) =>
              formatText(
                "fontSize",
                e.target.value
              )
            }
            defaultValue="3"
          >
            <option value="2">Small</option>
            <option value="3">Normal</option>
            <option value="5">Large</option>
            <option value="6">Extra Large</option>
          </select>


          <span className="toolbar-divider"></span>


          {/* Alignment */}
          <button
            onClick={() =>
              formatText("justifyLeft")
            }
          >
            ☰
          </button>

          <button
            onClick={() =>
              formatText("justifyCenter")
            }
          >
            ≡
          </button>

          <button
            onClick={() =>
              formatText("justifyRight")
            }
          >
            ☷
          </button>


          <span className="toolbar-divider"></span>


          {/* Lists */}
          <button
            onClick={() =>
              formatText("insertUnorderedList")
            }
          >
            • List
          </button>

          <button
            onClick={() =>
              formatText("insertOrderedList")
            }
          >
            1. List
          </button>


          {/* Clear */}
          <button
            className="clear-editor-btn"
            onClick={clearDocument}
          >
            Clear
          </button>

        </div>


        {/* EDITOR */}
        <div
          ref={editorRef}
          className="real-text-editor"
          contentEditable="true"
          suppressContentEditableWarning={true}
          onInput={updateStats}
          data-placeholder="Start writing your document..."
        ></div>


        {/* BOTTOM STATUS BAR */}
        <div className="editor-statusbar">

          <div>
            Words: <strong>{wordCount}</strong>
          </div>

          <div>
            Characters: <strong>{charCount}</strong>
          </div>

          <div>
            Reading time:{" "}
            <strong>
              {Math.max(1, Math.ceil(wordCount / 200))} min
            </strong>
          </div>

          <div className="status-right">
            {saved ? "✓ All changes saved" : "● Not saved"}
          </div>

        </div>

      </div>

    </div>
  );
}