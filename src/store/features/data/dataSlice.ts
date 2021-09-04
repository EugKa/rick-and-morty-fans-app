import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../index';
import * as api from '../../../api'

interface dataState {
    dataState: any;
    fullEp: any
    status: string;
    error?: boolean;
}

const initialState: dataState = {
    dataState: [],
    fullEp: [],
    status: 'idle',
    error: false
}

export const dataThunk = createAsyncThunk(
    "@@data/fetchData",
    async (params: any) => {
      const {searchBy, page} = params;
      const data = await api.fetchData(searchBy, page);
      return data;
    }
);

export const getFullEp = createAsyncThunk(
  "@@data/getFullEp",
  async (params: any) => {
    console.log(`REDUXparams`, params)
    const data = await api.parallelCall(params);
    return data;
  }
);

export const dataSlice = createSlice({
  name: '@@data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(dataThunk.pending, (state) => {
        state.status = 'loading';
    })
    builder.addCase(dataThunk.fulfilled, (state, action) => {
        state.dataState = action.payload;
        state.status = 'successed';
    })    
    builder.addCase(dataThunk.rejected, 
        (state) => {
        state.status = 'failed';
        state.error = true;
    });
    ////////////////////////////////////////
    builder.addCase(getFullEp.pending, (state) => {
      state.status = 'loading';
    })
    builder.addCase(getFullEp.fulfilled, (state, action) => {
        state.fullEp = action.payload;
        state.status = 'successed';
    })    
    builder.addCase(getFullEp.rejected, 
        (state) => {
        state.status = 'failed';
        state.error = true;
    });
  }
})

export const selectData = (state: RootState) => state.dataSlice.dataState.results;
export const selectFullEp = (state: RootState) => state.dataSlice.fullEp;
export default dataSlice.reducer;