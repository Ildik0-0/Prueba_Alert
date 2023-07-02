import {configureStore} from '@reduxjs/toolkit'
import apiInfoReducer from './reducer'


export const store = configureStore({
    reducer:{
        apiInfo: apiInfoReducer,
               
    }
})