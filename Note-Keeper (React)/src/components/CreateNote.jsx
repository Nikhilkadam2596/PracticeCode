import React, { useState } from "react";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="createnote">
      <form className="form">
        <input
          className="input"  
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />

        <textarea
          className="textarea"   
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote} className="button">
          add
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
