import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from './slice/counterSlice'
import postsReducer from './slice/postsSlice'
import {postAPI} from "./api/posts.api";


const rootReducer = combineReducers({
    counterReducer,
    postsReducer,
    [postAPI.reducerPath] : postAPI.reducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
    })}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
