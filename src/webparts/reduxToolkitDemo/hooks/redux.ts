import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

import { bindActionCreators } from "@reduxjs/toolkit";
import {
    addPost, deletePost, fetchPosts, updatePost
} from "../store/actions/actionCreators";

const allActions = {
  fetchPosts,
  addPost,
  updatePost,
  deletePost,
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
