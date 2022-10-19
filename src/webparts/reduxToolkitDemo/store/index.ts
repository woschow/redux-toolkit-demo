import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice/counterSlice';
import { postAPI } from "./slice/postsAPISlice";
import postsReducer from './slice/postsSlice';


const rootReducer = combineReducers({
    counterReducer,
    postsReducer,
    [postAPI.reducerPath] : postAPI.reducer
})

export const store =  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

