import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : 'movies',
    initialState: {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovie : null,
        upomingMovie : null,
        topRatedMovie : null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies  = action.payload
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovie : (state, action) => {
            state.popularMovie = action.payload
        },
        addUpomingMovie : (state, action) => {
            state.upomingMovie = action.payload
        },
        addTopRatedMovie : (state, action) => {
            state.topRatedMovie = action.payload
        }
}});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovie , addUpomingMovie, addTopRatedMovie} = movieSlice.actions

export default movieSlice.reducer