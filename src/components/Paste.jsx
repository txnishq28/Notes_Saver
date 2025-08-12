import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllPaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ShareButtons from "./Share";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  const dispatch = useDispatch();

  const [searchTerm, setsearchTerm] = useState('');

  const filterData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeAllPaste(pasteId))
  }

  const handleShare = () => {
    toast(<ShareButtons />, {
      position: "bottom-center",
      autoClose: false,
      closeOnClick: false,
      draggable: false
    });
  };
  return (
    <div>
      <input
        className='p-2 rounded-2xl min-w-[500px] bg-black mt-5'
        type='search'
        placeholder='Search Here'
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />

      {/* Notes cards to be diplayed */}

      <div className='flex flex-col gap-6 mt-4'>
      {
        filterData.length > 0 &&
        
        filterData.map(
          (paste) => {
              return(
              <div className='border rounded-2xl bg-black' key={paste?._id}>
                <div>
                {paste.title}
                </div>
                <div>
                {paste.content}
                </div> 
                <div className='flex flex-row gap-3 place-content-evenly'>
                  <button>
                  <Link to={`/?pasteId=${paste?._id}`}>
                    Edit 
                  </Link> 
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button>
                  <Link to={`/pastes/${paste?._id}`}>
                    View
                  </Link>
                  </button>
                  <button onClick={() => {navigator.clipboard.writeText(paste?.content)
                  toast.success("Copied")} }>
                    Copy
                  </button>
                  <div>
                  <button onClick={handleShare}>
                    Share
                  </button>
                  </div>
                </div>
                <div>
                {paste.createdAt}
                </div>
              </div>
            )
          }
        )
      }
      </div>

    </div>
  )
}

export default Paste