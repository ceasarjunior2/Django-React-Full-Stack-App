import React from "react";
import "../styles/Note.css";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="row">
      <div className="col">{note.title}</div>
      <div className="col">{note.content}</div>
      <div className="col">{formattedDate}</div>
      <div className="col">
        <button className="delete-button" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
