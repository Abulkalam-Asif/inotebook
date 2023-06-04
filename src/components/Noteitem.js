import React from 'react'

const Noteitem = (props) => {
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
          <div className="card-footer d-flex justify-content-between py-4">
            <i className="fa-regular fa-trash-can fa-xl text-danger"></i>
            <i className="fa-regular fa-pen-to-square fa-xl text-success"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Noteitem