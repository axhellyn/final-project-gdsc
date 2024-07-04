import React from 'react'

export default function Button({textButton, onClick}) {
  return (
    <button onClick={onClick} className='w-fit py-1 px-6 border-2 border-darkPurple shadow-md rounded-3xl bg-white bg-opacity-10 hover:bg-darkPurple hover:text-white transition ease-in-out duration-500'>{textButton}</button>
  )
}
