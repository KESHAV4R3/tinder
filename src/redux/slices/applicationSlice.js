import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isHome: true,
    currentPerson: 0,
    currentPersonData: null,
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
        updateCurrentPerson(state) {
            state.currentPerson++;
        },
        updateCurrentPersonData: (state, action) => {
            state.currentPersonData = action.payload
        },
    }
})


export const { setHome, removeHome, updateCurrentPerson, updateCurrentPersonData } = applicationSlice.actions

export default applicationSlice.reducer