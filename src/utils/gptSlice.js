import { createSlice } from "@reduxjs/toolkit";

 const gptSlice = createSlice ({
  name : 'gptSlice',
  initialState : {
    showGptSearch : false
  },
  reducers : {
    toogleGptSearch: (state, action) => {
        state.showGptSearch = !state.showGptSearch
    }
  }
})

export const {toogleGptSearch} = gptSlice.actions

export default gptSlice.reducer