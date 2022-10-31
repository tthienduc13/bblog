import React from 'react'
import AddPost from './AddPost'

function Main() {
  return (
    <>
        <div className='w-full bg-[#f0f2f5] h-[1000px] relative'>
            <div className='w-[720px] h-full  top-[20px] rounded-2xl left-[400px] absolute'>
                <AddPost></AddPost>
            </div>
        </div>
    </>
  )
}

export default Main