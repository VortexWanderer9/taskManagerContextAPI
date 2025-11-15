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
                <div key={note.id} className='bg-[#BBC863]  rounded p-2 relative flex flex-col h-auto'>
                  <div className='absolute right-1 p-1 top-1 cursor-pointer bg-[#F0E491] rounded hover:bg-[#F0E491]/50' onClick={() => handelClick(note.id)}>
                <img width={20} src="../trash.svg" alt="trash" />
                  </div>
        <div className='text-center text-lg font-bold break-words'>
            <span>{note.heading}</span>
        </div>
        <div>
        <h2 className='break-words  leading-relaxed 
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