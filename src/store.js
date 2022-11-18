import { configureStore } from '@reduxjs/toolkit'
import colorReducer from './features/colorSplice'

export const store = configureStore({
    reducer: {
        color: colorReducer
    }
})