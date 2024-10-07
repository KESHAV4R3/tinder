import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isHome: true
}

export const applicationSlice = createSlice({
    name: 'applicationSlice',
    initialState,
    reducers: {
        setHome: (state) => {
            state.isHome = true
        },
        removeHome: (state) => {
            state.isHome = false
        },
    },
})


export const { setHome, removeHome } = applicationSlice.actions

export default applicationSlice.reducer