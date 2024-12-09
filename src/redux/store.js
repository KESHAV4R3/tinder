import { configureStore } from '@reduxjs/toolkit'
import applicationSlice from './slices/applicationSlice'
import chatSlice from './slices/chatSlice'
import dataSlice from './slices/dataSlice'

export const store = configureStore({
    reducer: {
        applicationSlice: applicationSlice,
        chatSlice: chatSlice,
        dataSlice: dataSlice,
    },
})