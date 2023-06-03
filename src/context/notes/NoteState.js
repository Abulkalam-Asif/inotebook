import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "64774e2e02361c3feea67b63",
      "user": "64755708f77a52e25b915253",
      "title": "Check CMS",
      "description": "I will have to check CMS tomorrow",
      "tag": "University",
      "date": "2023-05-31T13:39:58.551Z",
      "__v": 0
    },
    {
      "_id": "647aca2fd0b8d68bf8f497a1",
      "user": "64755708f77a52e25b915253",
      "title": "Eat Fruits",
      "description": "Eat watermelon and banana.",
      "tag": "Health",
      "date": "2023-06-03T05:05:51.068Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;