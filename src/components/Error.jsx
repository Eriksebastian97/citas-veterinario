import React from 'react'

const Error = ({children}) => {
  return (
    (
        <div
          className="bg-red-600 text-white p-3
          uppercase font-bold mb-3 rounded-r-xl text-center">
          <p>{children}</p>
        </div>
      )
  )
}

export default Error