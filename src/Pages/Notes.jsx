import React from 'react'
import { useNotes } from '../Context'

function Notes() {
  const {notes, removeNote} = useNotes()

  const handelClick = (id) =>{
    removeNote(id)
  }
  return (
    <>
    <div>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 sm:grid-cols-1 gap-3 p-3'>
              {notes.map((note) => (
                <div key={note.id} className='bg-[#BBC863]  rounded p-4 relative flex flex-col h-auto'>
                 <div className='flex justify-between items-center'>
        <div className='text-center text-lg text-emerald-800 font-bold break-words'>
            <span>{note.heading}</span>
        </div>
          <div className=' p-1 cursor-pointer bg-[#F0E491] rounded hover:bg-[#F0E491]/50' onClick={() => handelClick(note.id)}>
                <img width={20} src="../trash.svg" alt="trash" />
                  </div>
                 </div>
        <div>
        <h2 className='break-words  leading-relaxed text-gray-600 font-light
        whitespace-pre-wrap '>
           {note.body}
        </h2>
        </div>
        </div>  
              ))}
        </div>
    </div>
    
    </>
  )
}

export default Notes