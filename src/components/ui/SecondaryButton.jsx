import React from 'react'

export default function SecondaryButton({textButton, onClick}) {
  return (
    <button onClick={onClick} className='w-fit py-1 px-4 border-2 border-purple shadow-md rounded-3xl bg-purple text-white hover:bg-transparent active:transform active:scale-[0.8] hover:text-purple transition ease-in-out duration-500'>{textButton}</button>
  )
}
