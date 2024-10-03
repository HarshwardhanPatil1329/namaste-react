import React from 'react'
import { useRouteError } from 'react-router-dom';
const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1 className='heading'>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h2 className='heading'>{err.status}</h2>
      <h2 className='heading'>{err.data}</h2>
    </div>
  )
}

export default Error
