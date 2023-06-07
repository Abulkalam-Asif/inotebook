import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

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
    const json = await response.json();
    console.log(json);

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
    setNotes(notes.concat(note));
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3NTU3MDhmNzdhNTJlMjViOTE1MjUzIn0sImlhdCI6MTY4NTQxMzE5Nn0.kug-D70IEGaX7MArFQFNh4_JUwHtMSJXuKZH5S3AQDA"
      }
    });
    const json = await response.json();
    console.log(json);

    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3NTU3MDhmNzdhNTJlMjViOTE1MjUzIn0sImlhdCI6MTY4NTQxMzE5Nn0.kug-D70IEGaX7MArFQFNh4_JUwHtMSJXuKZH5S3AQDA"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, getNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;