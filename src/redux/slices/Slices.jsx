import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCurses : []
}

const curseSlice = createSlice({
    name : 'allCurses',
    initialState,
    reducers: {
        addCurses(state,action){
            return{
                ...state,
                allCurses : [...state.allCurses,action.payload]
            }
        }
    }
})

export const {addCurses} = curseSlice.actions

export default curseSlice.reducer