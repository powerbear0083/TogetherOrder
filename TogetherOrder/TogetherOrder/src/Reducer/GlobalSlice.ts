import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice(
    {
        name: 'global',
        initialState: {
            value: 0
        },
        reducers: {
            foo: (state) => {
                console.log(state)
            }
        }
    }
)
export const { foo } = globalSlice.actions

export default globalSlice.reducer