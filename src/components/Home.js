import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const Home = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;

  return (
    <>
      <h1>Add a Note</h1>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="title" />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" />
            <div id="tagText" className="form-text">The default tag is <mark>General</mark>.</div>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <hr />
      <h1>Your Notes</h1>
      <div className="container">
        {notes.map((note) => note.title)}
      </div>
    </>
  )
}

export default Home;