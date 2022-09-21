import {IPost} from "../../models/IPost";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAppState} from "../models/appState";

const initialState: IAppState<IPost> = {
    data: [],
    isLoading: false,
    error: ''
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsFetching(state){
            state.isLoading = true;
        },
        postsFetchingSuccess(state, action: PayloadAction<IPost[]>){
            state.isLoading = false;
            state.data = action.payload;
        },
        postsFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        addPost(state, action:PayloadAction<IPost>){
            state.isLoading = false;
        },
        addPostSuccess(state, action:PayloadAction<IPost>){
            state.isLoading = false;
            state.data.push(action.payload);
        },
        addPostError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        updatePost(state, action:PayloadAction<IPost>){
            state.isLoading = false;
        },
        updatePostSuccess(state, action:PayloadAction<IPost>){
            state.isLoading = false;

            let searchResult = state.data.filter(u => u.id === action.payload.id);

            console.log('searchResult', searchResult);

            if(searchResult && searchResult.length > 0){
                state.data.filter(u => u.id === action.payload.id)[0].title = action.payload.title;
            }
        },
        updatePostError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        deletePost(state, action: PayloadAction<IPost>){
            state.isLoading = false;
        },
        deletePostSuccess(state, action: PayloadAction<number>){
            state.isLoading = false;
            state.data = state.data.filter(p => p.id !== action.payload)
        },
        deletePostError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        }

    }
})

export default postsSlice.reducer;


