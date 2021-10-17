import { configureStore } from '@reduxjs/toolkit'
import globalReducer from "../Reducer/GlobalSlice"

export default configureStore(
    {
        reducer: {
            global: globalReducer
        }
    }
)
