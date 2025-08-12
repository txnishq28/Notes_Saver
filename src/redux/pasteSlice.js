import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

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
            const paste = action.payload
            state.pastes.push(paste);
            localStorage.setItem("pastes" , JSON.stringify(state.pastes));
            toast.success("Your Notes are Saved")
        },
        updateToPaste : (state , action) => 
        {
            const paste = action.payload
            const index = state.pastes.findIndex((item) =>
            item._id === paste._id);

            if(index >= 0){
                state.pastes[index] = paste;

                localStorage.setItem("pastes" , JSON.stringify(state.pastes) );

                toast.success("Your Notes has been Updated")
            }
        },
        resetAllPaste: (state, action) => 
        {
            state.pastes = [];

            localStorage.removeItem("pastes");
        },
        removeAllPaste: (state, action) => 
        {
            const pasteId = action.payload;

            console.log(pasteId);

            const index = state.pastes.findIndex((item) =>
            item._id == pasteId);

            if(item >= 0){
                state.pastes.splice(index , 1);

                localStorage.setItem("pastes" , JSON.stringify(state.pastes));

                toast.success("Notes Deleted")
            }    

        },
    },
})


export const {addToPaste ,updateToPaste,resetAllPaste,removeAllPaste } = pasteSlice.actions

export default pasteSlice.reducer