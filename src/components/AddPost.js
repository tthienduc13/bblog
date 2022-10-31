import React from 'react'

function AddPost() {
  return (
    <>
        <div className='bg-white w-full rounded-2xl px-4 flex flex-col'>
                    <div className='flex flex-row justify-center items-center border-b-2 border-b-[#f0f2f5] py-4'>
                        <img className='w-[40px] h-[40px] inline-block rounded-full ' src={require("../assets/img/avatar.jpg")}></img>
                        <input className='w-[calc(100%-72px)] outline-none bg-[#f0f2f5] rounded-2xl border-none px-4 py-2 ml-4' placeholder="What's on your mind, Duc?"></input>
                    </div>
                    <div className='flex flex-row justify-center items-center py-4 cursor-pointer '>
                        <div className='w-1/3 text-center text-lg font-medium py-2 hover:rounded-lg hover:bg-[#f0f2f5]'>
                            <i class="fa-solid mr-4 fa-video text-red-500"></i>
                            Live video
                        </div>
                        <div className='w-1/3 text-center text-lg font-medium py-2 hover:rounded-lg hover:bg-[#f0f2f5]'>
                            <i class="fa-solid mr-4 fa-image text-green-500"></i>
                            Photo/video
                        </div>
                        <div className='w-1/3 text-center text-lg font-medium py-2 hover:rounded-lg hover:bg-[#f0f2f5]'>
                            <i class="fa-solid mr-4 fa-face-smile text-orange-500"></i>
                            Feeling/Activity
                        </div>
                    </div>
                </div>
    </>
  )
}

export default AddPost