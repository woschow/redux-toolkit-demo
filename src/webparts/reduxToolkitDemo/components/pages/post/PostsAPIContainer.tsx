import * as React from "react";

import * as strings from "ReduxToolkitDemoWebPartStrings";
import { AppSettings } from "../../../../../appSettings";
import { IPost } from "../../../models/IPost";
import MessageBar from "../../../shared/MessageBar";
import {
    useCreatePostMutation,
    useDeletePostMutation,
    useFetchAllPostsQuery,
    useUpdatePostMutation
} from '../../../store/slice/postsAPISlice';
import PostItem from "./PostItem";

const PostsAPIContainer = () => {

    const {data, error, isLoading} = useFetchAllPostsQuery(AppSettings.itemsLimit)
    const [createPost, {}] = useCreatePostMutation();
    const [updatePost, {}] = useUpdatePostMutation();
    const [deletePost, {}] = useDeletePostMutation();

    const handleCreate = async () => {
        const title = prompt();
        await createPost({title} as IPost)
    }

    const handleRemove = async (post: IPost) => {
        await deletePost(post)
    }

    const handleUpdate = async (post: IPost) => {
        await updatePost(post)
    }

    return (
        <div className="container mt-3">
            <h3>{strings.PostsContainerAPITitle}</h3>
            <button className="btn btn-primary m-3" onClick={handleCreate}>{strings.BtnNewTitle}</button>
            {isLoading && <h3>Loading...</h3>}
            {error && "message" in error && <MessageBar text={error.message} status="error" />}
            {data && <div>
                {
                    data.map(user => <PostItem key={user.id} data={user} remove={handleRemove} update={handleUpdate}/>)
                }
            </div>}
        </div>
    );
}

export default PostsAPIContainer;
