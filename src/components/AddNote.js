import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" })


  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    props.showAlert("Note added successfully", "success");
    setNote({ title: "", description: "", tag: "" });
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Add a Note</h1>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <span className='form-text text-danger ms-3'>{note.title.length < 3 && "At least 3 characters long"}</span>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="title" onChange={onChange} required minLength={3} value={note.title} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <span className='form-text text-danger ms-3'>{note.description.length < 5 && "At least 5 characters long"}</span>
            <input type="text" className="form-control" id="description" name="description" onChange={onChange} required minLength={5} value={note.description} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={note.tag} />
            <div id="tagText" className="form-text">The default tag is <span className="badge text-bg-primary">General</span></div>
          </div>
          <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>
    </>
  )
}

export default AddNote