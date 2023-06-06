import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesList = [];
  const [notes, setNotes] = useState(notesList);

  // Get All Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3NTU3MDhmNzdhNTJlMjViOTE1MjUzIn0sImlhdCI6MTY4NTQxMzE5Nn0.kug-D70IEGaX7MArFQFNh4_JUwHtMSJXuKZH5S3AQDA"
      }
    });
    const json = await response.json();
    setNotes(json);
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3NTU3MDhmNzdhNTJlMjViOTE1MjUzIn0sImlhdCI6MTY4NTQxMzE5Nn0.kug-D70IEGaX7MArFQFNh4_JUwHtMSJXuKZH5S3AQDA"
      },
      body: JSON.stringify({ title, description, tag })
    });

    // Adding a Note
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
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3NTU3MDhmNzdhNTJlMjViOTE1MjUzIn0sImlhdCI6MTY4NTQxMzE5Nn0.kug-D70IEGaX7MArFQFNh4_JUwHtMSJXuKZH5S3AQDA"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, getNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;