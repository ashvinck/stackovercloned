import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from "./getQueAPi";


const initialState = {
    data: [],
    searchedData: [],
    loading: false,
}

export const fetchAysncData = createAsyncThunk('stackdata/fetchData',
    async () => {
        const response = await fetchData();
        return response;
    }
);

export const questionSlice = createSlice({
    name: "stackdata",
    initialState,

    reducers: {
        handleSearchData: (state, action) => {
            state.searchedData = [];
            state.searchedData.push(action.payload);
        }
    },
    extraReducers: {
        [fetchAysncData.pending]: (state) => {
            state.loading = true;
        },
        [fetchAysncData.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
        },
        [fetchAysncData.rejected]: (state) => {
            state.loading = false;
        },
    },
})

export const selectData = (state) => state.stackdata.data;
export const selectLoading = (state) => state.stackdata.loading;

export const { handleSearchData } = questionSlice.actions;

export default questionSlice.reducer;
