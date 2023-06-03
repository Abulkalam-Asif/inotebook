import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <>
      <h1>Your Notes</h1>
      <div className="container row">
        {notes.map((note) => {
          return <Noteitem note={note} />
        })}
      </div>
    </>
  )
}

export default Notes