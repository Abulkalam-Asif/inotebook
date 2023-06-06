import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const notesList = [
    {
      "_id": "647ad78f87e5b94f7945034b",
      "user": "64755708f77a52e25b915253",
      "title": "Eat Fruits",
      "description": "Eat food.",
      "tag": "Health",
      "date": "2023-06-03T06:02:55.659Z",
      "__v": 0
    },
    {
      "_id": "647ad79087e5b94f7945034d",
      "user": "64755708f77a52e25b915253",
      "title": "Eat Fruits",
      "description": "Eat food.",
      "tag": "Health",
      "date": "2023-06-03T06:02:56.209Z",
      "__v": 0
    },
    {
      "_id": "647ad79087e5b94f7945034f",
      "user": "64755708f77a52e25b915253",
      "title": "Eat Fruits",
      "description": "Eat food.",
      "tag": "Health",
      "date": "2023-06-03T06:02:56.823Z",
      "__v": 0
    },
    {
      "_id": "647ad79187e5b94f79450351",
      "user": "64755708f77a52e25b915253",
      "title": "Eat Fruits",
      "description": "Eat food.",
      "tag": "Health",
      "date": "2023-06-03T06:02:57.435Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesList);

  // Add a Note
  const addNote = (title, description, tag) => {
    let note = {
      "_id": new Date().getTime(),
      "user": "64755708f77a52e25b915253",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-06-03T06:02:57.435Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }
  // Delete a Note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note._id !== id);  
    setNotes(newNotes);
  }
  // Edit a Note
  const editNote = (id, title, description, tag) => {

  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;