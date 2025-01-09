import { configureStore} from '@reduxjs/toolkit'
import postReducer from '../features/posts/postSlice'


export const Store = configureStore({
    
    reducer: {
        post:postReducer,
    }
})