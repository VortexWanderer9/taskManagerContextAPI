import React, { useState } from 'react'
import { useNotes } from '../Context'

function InputNote({setAdd}) {
     const [heading, setHeading] = useState("")
     const [body, setBody] = useState("")
    const {addNote} = useNotes()    
    const handelClick = () =>{
      setAdd(prev => !prev)
    }

   const addNewTask = () => {
    addNote({heading, body})
     handelClick(); 
    };
    
  return (
    <>
    <div className='flex items-center justify-center'>
    <div className='bg-[#D2DCB6] p-4 relative'>
      <div className='absolute right-1 top-1 rounded-full cursor-pointer ease-linear active:scale-95 hover:rotate-10 hover:bg-amber-600 duration-300 bg-amber-500' onClick={handelClick}>
        <img width={20} src="../x.svg" alt="close" />
      </div>
      <h2 className='text-center font-bold text-fuchsia-800 uppercase text-2xl border-b'>Add new Note</h2>
      <div className='flex flex-col gap-1 mt-2'>
        <label 
        className='text-lg text-cyan-800 font-mono uppercase cursor-pointer'
        htmlFor="heading">Heading:</label>
        <input 
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        type="text"
         id='heading'
          placeholder='Add your note Heading' 
          className='bg-[#628141]/10 py-1 px-2 rounded outline-none'
          />
      </div>
      <div className='mt-4 flex flex-col '>
        <label 
        className='text-lg text-cyan-800 font-mono uppercase cursor-pointer'
        htmlFor="body"
        >Note:
        </label>

        <textarea 
        name="body" 
        id="body"
        className='outline-none bg-[#A1BC98] p-2'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        >

        </textarea>
      </div>
      <button className=' w-full mt-3 cursor-pointer bg-[#658C58] py-1 rounded font-bold text-[#D2DCB6] hover:bg-[#658C58]/50 duration-300 ease-in-out' onClick={addNewTask}>Add Note</button>
    </div>
  </div>
  </>
  )
}

export default InputNote