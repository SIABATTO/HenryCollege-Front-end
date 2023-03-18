import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCurses : [],
    users : []
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
        },
        addUser(state,action){
            return{
                ...state,
                users : [...state.users,action.payload]
            }
        }
    }
})

export const {addCurses, addUser} = curseSlice.actions

export default curseSlice.reducer