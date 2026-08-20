import { useEffect, useState } from "react";

export default function QuickNotes() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("souvik-quick-notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "souvik-quick-notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = () => {
    if (!title.trim() && !content.trim()) {
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title.trim() || "Untitled Note",
      content: content.trim(),
      pinned: false,
      date: new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);

    setTitle("");
    setContent("");
  };

  const deleteNote = (id) => {
    setNotes(
      notes.filter((note) => note.id !== id)
    );
  };

  const togglePin = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, pinned: !note.pinned }
          : note
      )
    );
  };

  const filteredNotes = notes
    .filter((note) =>
      `${note.title} ${note.content}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort(
      (a, b) =>
        Number(b.pinned) - Number(a.pinned)
    );

  return (
    <div className="quick-notes-page">

      <section className="notes-header">

        <div>
          <div className="notes-badge">
            ✦ SOUVIK HUB / QUICK NOTES
          </div>

          <h1>
            Capture your <span>ideas.</span>
          </h1>

          <p>
            Write down ideas, tasks and thoughts before
            they disappear.
          </p>
        </div>

        <div className="notes-count">
          <strong>{notes.length}</strong>
          <span>Total Notes</span>
        </div>

      </section>


      <section className="note-editor-card">

        <div className="note-editor-top">
          <span>✎ NEW NOTE</span>

          <span>
            {content.length} characters
          </span>
        </div>

        <input
          type="text"
          className="note-title-input"
          placeholder="Note title..."
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <textarea
          className="note-content-input"
          placeholder="Start writing your note..."
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <div className="note-editor-footer">

          <span>
            💡 Notes are saved locally.
          </span>

          <button
            className="add-note-btn"
            onClick={addNote}
          >
            Add Note →
          </button>

        </div>

      </section>


      <div className="notes-toolbar">

        <div>
          <span>YOUR NOTES</span>
          <h2>My Notes</h2>
        </div>

        <div className="notes-search">
          🔍

          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

      </div>


      {filteredNotes.length > 0 ? (

        <section className="notes-grid">

          {filteredNotes.map((note) => (

            <article
              key={note.id}
              className={`note-card ${
                note.pinned
                  ? "pinned-note"
                  : ""
              }`}
            >

              <div className="note-card-top">

                <span className="note-icon">
                  📝
                </span>

                <div className="note-card-actions">

                  <button
                    onClick={() =>
                      togglePin(note.id)
                    }
                  >
                    {note.pinned
                      ? "📌"
                      : "📍"}
                  </button>

                  <button
                    onClick={() =>
                      deleteNote(note.id)
                    }
                  >
                    🗑️
                  </button>

                </div>

              </div>

              <h3>
                {note.title}
              </h3>

              <p>
                {note.content || "No content"}
              </p>

              <div className="note-card-footer">

                <span>
                  {note.date}
                </span>

                {note.pinned && (
                  <strong>PINNED</strong>
                )}

              </div>

            </article>

          ))}

        </section>

      ) : (

        <div className="empty-notes">

          <div className="empty-notes-icon">
            📝
          </div>

          <h3>
            {search
              ? "No notes found"
              : "No notes yet"}
          </h3>

          <p>
            Create your first note above.
          </p>

        </div>

      )}

    </div>
  );
}