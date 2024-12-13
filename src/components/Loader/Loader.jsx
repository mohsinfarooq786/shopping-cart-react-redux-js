import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div>
      <div className="container loaderContainer">
        <Spinner variant='dark' animation="border" role="status" size='lg'>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  )
}

export default Loader