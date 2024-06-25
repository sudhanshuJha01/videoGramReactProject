import React from 'react'

const AuthBTn = ({label}) => {
  return (
    <div>
        <button className='bg-pink-500 p-1 rounded-md text-white font-medium hover:bg-pink-600'>
            <span className='mx-1'>{label}</span>
        </button>
    </div>
  )
}

export default AuthBTn