import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  const { note } = props;
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 my-3">
        <div className="card" style={{ "width": "18rem" }}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="card-title">{note.title}</h5>
              <span className="badge text-bg-primary">{note.tag}</span>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button className="btn btn-outline-danger border border-danger border-2 py-1 px-2"><i className="fa-regular fa-trash-can fa-lg" onClick={() => { deleteNote(note._id) }}></i></button>
            <button className="btn btn-outline-success border border-success border-2 py-1 px-2"><i className="fa-regular fa-pen-to-square fa-lg"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Noteitem