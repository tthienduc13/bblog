import React from 'react'
import AddPost from './AddPost'
import Post from './Post'

function Main() {
  return (
    <>
        <div className=' w-full  top-[56px]  relative flex justify-center'>
            <div className='w-[720px] mt-5 rounded-2xl absolute'>
                <AddPost></AddPost>
                <Post></Post>
            </div>
        </div>
    </>
  )
}

export default Main