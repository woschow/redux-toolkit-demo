import * as React from "react";
import { useEffect } from "react";
import * as strings from "ReduxToolkitDemoWebPartStrings";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { IPost } from "../../../models/IPost";
import MessageBar from "../../../shared/MessageBar";
import { addPost, deletePost, fetchPosts, updatePost } from "../../../store/actions/actionCreators";
import PostItem from "./PostItem";

const PostsSliceContainer = () => {

    const dispatch = useAppDispatch();
    const {data, isLoading, error} = useAppSelector(state => state.postsReducer)

    useEffect( () => {
        dispatch(fetchPosts())
    }, [])

    const handleCreate = async () => {
        const title = prompt();
        await dispatch(addPost({title} as IPost));
    }

    const handleRemove = async (post: IPost) => {
       await dispatch(deletePost(post))
    }

    const handleUpdate = async (post: IPost) => {
        await dispatch(updatePost(post))
    }

    return (
        <div className="container mt-3">
            <h3>{strings.PostsContainerSliceTitle}</h3>
            <button className="btn btn-primary m-3" onClick={handleCreate}>{strings.BtnNewTitle}</button>
            {isLoading && <h3>Loading...</h3>}
            {error && <MessageBar text={error} status="error"/>}
            {data && <div>
                {
                    data.map(post => <PostItem key={post.id} data={post} remove={handleRemove} update={handleUpdate}/>)
                }
            </div>}
        </div>
    );
}

export default PostsSliceContainer;
