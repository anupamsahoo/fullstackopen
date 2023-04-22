import { useState, useEffect } from "react";
import Note from "./part2/Note";
import noteService from "./part2/services/notes";

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState("some error happened...");

  const Notification = ({ message }) => {
    if (message === null) {
      return null;
    }

    return <div className="error">{message}</div>;
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toJSON(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    noteService.create(noteObject).then((initialNotes) => {
      console.log(initialNotes);
      setNotes(notes.concat(initialNotes));
      setNewNote("");
    });
  };
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  const toggleImportanceOf = (id) => {
    console.log("importance of " + id + " needs to be toggled");

    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote).then((initialNotes) => {
      setNotes(notes.map((n) => (n.id !== id ? n : initialNotes)));
    });
  };
  const deleteNote = (note) => {
    if (window.confirm(`Delete ${note.id}?`)) {
      noteService
        .remove(note.id)
        .then((response) => {
          setNotes(notes.filter((n) => n.id !== note.id));
        })
        .catch((error) => {
          setErrorMessage(
            `Note '${note.content}' was already removed from server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setNotes(notes.filter((n) => n.id !== note.id));
        });
    }
  };
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
            deleteNote={() => deleteNote(note)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
