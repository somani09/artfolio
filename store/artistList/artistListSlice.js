import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    lastTimeStamp: null,
    artistList :{
        // data: null, 
        // errors:null ,
        // status:null
    }
}



const artistListSlice = createSlice({
    name:'artistListReducer',
    initialState,
    reducers:{
        lastTimeStampData: (state, action) =>{
            state.lastTimeStamp = action.payload
        },
        artistListData: (state, action) =>{
            // state.artistList.data = action.payload.data;
            // state.artistList.errors = action.payload.errors;
            // state.artistList.status = action.payload.action;
            state.artistList = action.payload
        }
    }
});

export default artistListSlice.reducer;
export const {lastTimeStampData, artistListData} = artistListSlice.actions;