import { createSlice } from "@reduxjs/toolkit";

const rootState = createSlice({
    name : "root",
    initialState : {},
    reducers : {
        update : (state,action) => {
            return state = action.payload
        }
    }
})


export const { update } = rootState.actions
export default rootState.reducer