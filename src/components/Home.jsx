import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [title , setTitle] = useState('')
  const [value, setValue] = useState(' ')
  
  const [searchParams , setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title : title ,
      content: value , 
      _id: pasteId || Date.now().toString(36),
      createdAt:new Date().toISOString

    }

    if(pasteId){
      //update
      dispatch();
    }
    else{
      //create
      dispatch();
    }
  }

    return (
      <div>
    <div className='flex flex-row gap-3 place-content-between mb-2'>
      <input
      className='p-2 rounded-xl place-content-evenly mt-3 bg-black w-[74%]'
        type='text'
        placeholder='enter title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
      onClick={createPaste}
      className='p-2 rounded-xl  mt-3 bg-black'>
      {
        pasteId ? "Update Note" : "Create a Note"
      }
      </button>
    </div>
    <div >
      <textarea
        className='p-4 rounded-3xl mt-3 bg-black  min-w-2xl'
        value={value}
        placeholder="Enter Your Content Here"
        onChange={(e) => setValue(e.target.value)}
        rows={30}
      />
    </div>
    </div>
  )
}

export default Home