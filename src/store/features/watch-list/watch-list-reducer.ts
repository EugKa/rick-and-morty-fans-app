import type { RootState } from '../../index';
import { IWatchList } from "../../../interface/watch-list";
import { createAction, createReducer } from '@reduxjs/toolkit'

export const addToWatchList = createAction<IWatchList>('@@WATCH-LIST/add')
export const updateItemFromWatchList = createAction<IWatchList>('@@WATCH-LIST/update')
export const deleteFromWatchList = createAction<number>('@@WATCH-LIST/delete')


const watchListReducer = createReducer([] as IWatchList[], (builder) => {
  builder
    .addCase(addToWatchList, (state, action) => {
      const item = action.payload
      return [...state, item]
    })
    .addCase(deleteFromWatchList, (state, action) => {
      return state.filter(item => item.id !== action.payload)
    })
    .addCase(updateItemFromWatchList, (state, action) => {
      const { complete, id } = action.payload;
      const existingPost = state.find((item) => item.id === id);
      if (existingPost) {
        existingPost.complete = complete;
      }
    })
})


export const selectatchList = (state: RootState) => state.watchListReducer;
export default watchListReducer
