import { configureStore } from "@reduxjs/toolkit"
import rootState from "./rootSlice"

export default configureStore({
    reducer : {
        rootState
    }
})