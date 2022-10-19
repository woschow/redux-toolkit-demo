import axiosClient from '../../../../axios/index';

import { IPost } from "../../models/IPost";
import { AppDispatch } from "../index";
import { postsActions } from "../slice/postsSlice";


const headers = {
    'Content-Type': 'application/json',
        Accept: 'application/json',
}

const entityPath: string = 'posts';

//Redux thunk
export const fetchPosts = () =>  async(dispatch: AppDispatch) => {
    try {

        dispatch(postsActions.postsFetching())
        const response = await axiosClient.get<IPost[]>(entityPath)
        dispatch(postsActions.postsFetchingSuccess(response.data))
    } catch(e){
        if(e.isAxiosError()){
            dispatch(postsActions.addPostError(e.message))
        } else {
            dispatch(postsActions.addPostError(e))
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

        dispatch(postsActions.addPostSuccess(response))

    } catch(e){
        if(e.isAxiosError()){
            dispatch(postsActions.addPostError(e.message))
        } else {
            dispatch(postsActions.addPostError(e))
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

        dispatch(postsActions.updatePostSuccess(response))

    } catch(e){
        if(e.isAxiosError()){
            dispatch(postsActions.addPostError(e.message))
        } else {
            dispatch(postsActions.addPostError(e))
        }
    }
}

export const deletePost = (data: IPost) =>  async(dispatch: AppDispatch) => {
    try {
        await axiosClient.delete(`${entityPath}/${data.id}`,
            {
                headers: headers,
            })

        dispatch(postsActions.deletePostSuccess(data.id))

    } catch(e){
        if(e.isAxiosError()){
            dispatch(postsActions.addPostError(e.message))
        } else {
            dispatch(postsActions.addPostError(e))
        }
    }
}



