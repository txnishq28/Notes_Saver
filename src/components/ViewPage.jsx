import React, { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { addToPaste, updateToPaste } from '../redux/pasteSlice'
import toast from 'react-hot-toast'

const ViewPage = () => {

  const{id} = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];
  return (
    <div>
    
      <div className='flex flex-row gap-3 place-content-between mb-2'>
      <input
      className='p-2 rounded-xl place-content-evenly mt-3 bg-black w-[100%]'
        type='text'
        placeholder='enter title here'
        value={paste.title}
        onChange={(e) => setTitle(e.target.value)}
        disabled
      />
    </div>

    <div className=' text-sm flex flex-row-reverse'>
      <button onClick={() => {navigator.clipboard.writeText(paste.content) 
      toast.success("Content copied")} } >
        Copy 
      </button>
    </div>

    <div >
      <textarea
        className='p-4 rounded-3xl mt-3 bg-black  min-w-2xl'
        value={paste.content}
        placeholder="Enter Your Content Here"
        onChange={(e) => setValue(e.target.value)}
        rows={30}
        disabled
      />
    </div>
    </div>
  )
}

export default ViewPage