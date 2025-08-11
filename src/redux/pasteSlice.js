import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pastes : localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: 
    {
        addToPaste: (state , action) => 
        {
            
        },
        updateToPaste : (state , action) => 
        {
            
        },
        resetAllPaste: (state, action) => 
        {
            
        },
        removeAllPaste: (state, action) => 
        {
            
        },
    },
})


export const {addToPaste ,updateToPaste,resetAllPaste,removeAllPaste } = pasteSlice.actions

export default pasteSlice.reducer