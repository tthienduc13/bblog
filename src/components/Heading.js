import React from 'react'

function Heading() {
  return (
    <>
        <div className='h-14 bg-[#484e7d] drop-shadow-lg flex flex-row justify-center items-center px-5'>
            <div className='font-bold text-3xl text-white min-w-[200px]'>BBLOG</div>
            <div className='flex-grow text-center'>
                <input className="outline-none bg-[#f0f2f5] rounded-2xl border-none py-2 px-4 w-[720px]" placeholder='Search for the blog....'></input>
            </div>
            <div className='min-w-[200px]'>Profile</div>
        </div>
    </>
  )
}

export default Heading