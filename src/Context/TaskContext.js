import React, { createContext, useContext } from "react";

export const UserNote = createContext({
    notes: [],
    addNote: () => {},
    removeNote: () => {}
})

 export const useNotes = () =>{
    return useContext(UserNote)
 }
export const NoteContextProvider =  UserNote.Provider

