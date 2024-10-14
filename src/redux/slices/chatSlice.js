import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user_name: "",
    user_photo: ""
}

export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        setName(state, action) {
            state.user_name = action.payload
        },
        setPhoto(state, action) {
            state.user_photo = action.payload
        },
    }
})


export const { setName, setPhoto } = chatSlice.actions

export default chatSlice.reducer