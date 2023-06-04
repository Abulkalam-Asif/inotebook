import React from 'react'

const Alert = (props) => {
  return (
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      {props.message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert