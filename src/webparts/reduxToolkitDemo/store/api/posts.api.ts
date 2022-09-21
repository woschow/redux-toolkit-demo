import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from "../../models/IPost";
import {AppSettings} from "../../../../appSettings";

export const postAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({baseUrl: AppSettings.apiBaseUrl}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = AppSettings.itemsLimit) => ({
                url: 'posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: ['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: 'posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `posts/${post.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Post']
        })
    })
})

export const { useFetchAllPostsQuery, useCreatePostMutation, useUpdatePostMutation, useDeletePostMutation }  = postAPI;
