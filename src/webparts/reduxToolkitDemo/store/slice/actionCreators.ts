import axiosClient from '../../../../axios/index'

import {AppDispatch} from "../index";
import {IPost} from "../../models/IPost";
import {postsSlice} from "./postsSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

const headers = {
    'Content-Type': 'application/json',
        Accept: 'application/json',
}

const entityPath: string = 'posts';

/*export const fetchPosts = () => createAsyncThunk(entityPath,
    async(_, thunkAPI) => {
        try {
            const response = await axiosClient.get<IPost[]>(entityPath)
            return response.data;
        }
        catch(e){
            return thunkAPI.rejectWithValue((e as Error).message)
        }
    }
    )

export const addPost = (data: IPost) => createAsyncThunk(entityPath,
    async(_, thunkAPI) => {
        try {
            const {data: response} = await axiosClient.post(entityPath,
                data,
                {
                    headers: headers
                })

            //dispatch(postsSlice.actions.addPostSuccess(response))
        }
        catch(e){
            return thunkAPI.rejectWithValue((e as Error).message)
        }
    }
)*/
export const fetchPosts = () =>  async(dispatch: AppDispatch) => {
    try {
        dispatch(postsSlice.actions.postsFetching())
        const response = await axiosClient.get<IPost[]>(entityPath)
        dispatch(postsSlice.actions.postsFetchingSuccess(response.data))
    } catch(e){
        if(e.isAxiosError()){
            dispatch(postsSlice.actions.addPostError(e.message))
        } else {
            dispatch(postsSlice.actions.addPostError(e))
        }
    }
}

export const addPost = (data: IPost) =>  async(dispatch: AppDispatch) => {
    try {
        const {data: response} = await axiosClient.post(entityPath,
            data,
            {
                headers: headers
            })

        dispatch(postsSlice.actions.addPostSuccess(response))

    } catch(e){
        if(e.isAxiosError()){
            dispatch(postsSlice.actions.addPostError(e.message))
        } else {
            dispatch(postsSlice.actions.addPostError(e))
        }
    }
}

export const updatePost = (data: IPost) =>  async(dispatch: AppDispatch) => {
    try {
       const {data: response} = await axiosClient.put<IPost>(`${entityPath}/${data.id}`,
            data,
            {
                headers: headers
            })

        dispatch(postsSlice.actions.updatePostSuccess(response))

    } catch(e){
        if(e.isAxiosError()){
            dispatch(postsSlice.actions.addPostError(e.message))
        } else {
            dispatch(postsSlice.actions.addPostError(e))
        }
    }
}

export const deletePost = (data: IPost) =>  async(dispatch: AppDispatch) => {
    try {
        await axiosClient.delete(`${entityPath}/${data.id}`,
            {
                headers: headers,
            })

        dispatch(postsSlice.actions.deletePostSuccess(data.id))

    } catch(e){
        if(e.isAxiosError()){
            dispatch(postsSlice.actions.addPostError(e.message))
        } else {
            dispatch(postsSlice.actions.addPostError(e))
        }
    }
}



