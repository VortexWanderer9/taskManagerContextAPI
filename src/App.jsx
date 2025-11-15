
import './App.css'
import Home from './Pages/Home'
import { NoteContextProvider } from './Context'
import { useEffect, useState } from 'react'

function App() {
  const [notes, setNotes] = useState([])
  const addNote = (heading, body) =>{
    setNotes((prev) => [{id: Date.now(),...heading, ...body }, ...prev])
  }
  
  const removeNote = (id) => {
    setNotes((prev) => prev.filter(item => id !== item.id))
  }
  useEffect(() => {
    const store = JSON.parse(localStorage.getItem('notes'))
    if(store && store.length > 0){
      setNotes(store)
    }
  }, [])

  useEffect(() => {
    if(notes && notes.length > 0){
      localStorage.setItem('notes', JSON.stringify(notes))
    } else {
      localStorage.clear()
    }
  }, [notes])
  return (
    <NoteContextProvider value={{notes, addNote, removeNote}}>
     <Home />
    </NoteContextProvider>
  )
}

export default App
