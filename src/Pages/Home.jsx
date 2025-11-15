import React, { useState } from 'react'
// import useTask from '../Context/TaskContext'
import InputNote from '../Components/InputNote';
import Notes from './Notes';

function Home() {
  // const {task} = useTask()  
  const [add, setAdd] = useState(false)
    const handelClick = () =>{
      setAdd(prev => !prev)
    }
  
  return (
    <>
    <div className="min-h-screen w-full bg-white relative text-black">
  {/* Noise Texture (Darker Dots) Background */}
  <div
    className="fixed inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
      backgroundSize: "20px 20px",
    }}>
   </div>
    <div className='w-full h-full absolute'>
      <div>
        <div className=' fixed right-2 top-1 hover:bg-[#A1BC98] rounded cursor-pointer active:scale-90 duration-300 ease-in bg-[#778873] ' onClick={handelClick}>
     <img src="../add.svg" alt="" />
   </div>
      </div>
   <div className='mt-15'>
    {add ? <InputNote  setAdd={setAdd}/> : <Notes />}
   </div>
    </div>
</div>
</>
  )
}

export default Home