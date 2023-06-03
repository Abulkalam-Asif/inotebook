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
    },
    {
      "_id": "647ad261ce66cdc718070219",
      "user": "64755708f77a52e25b915253",
      "title": "Eat Fruits",
      "description": "Eat watermelon and apple.",
      "tag": "Health",
      "date": "2023-06-03T05:40:49.605Z",
      "__v": 0
    },
    {
      "_id": "647ad268ce66cdc71807021b",
      "user": "64755708f77a52e25b915253",
      "title": "Eat Fruits",
      "description": "Eat food.",
      "tag": "Health",
      "date": "2023-06-03T05:40:56.734Z",
      "__v": 0
    },
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
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;