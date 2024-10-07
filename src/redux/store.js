import { configureStore } from '@reduxjs/toolkit'
import applicationSlice from './slices/applicationSlice'

export const store = configureStore({
    reducer: {
        applicationSlice: applicationSlice
    },
})