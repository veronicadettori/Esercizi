import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    isLoading: false,
    error: ""
}

export const getCommentFromBook = createAsyncThunk(
    "commentsFromBook/getCommentFromBook",
    async (asin) => {
        const endpoint = `https://striveschool-api.herokuapp.com/api/comments/${asin}`

        try {
            const data = await fetch(endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMzMjU1N2VmNmI2MDAwMTRmYjM0ZjEiLCJpYXQiOjE2ODM5MDkzNTcsImV4cCI6MTY4NTExODk1N30.UIgjE2csRYlowVb0ZMZqmmStPcYlDbS4jZ7C_oKyjeM"
                }
            })
            const response = await data.json()
            return response
        } catch (error) {
            if(error) throw new Error("C'è un errore...")
        }
    }
)

const commentsFromBookSlice = createSlice({
    name: "commentsFromBook",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getCommentFromBook.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getCommentFromBook.fulfilled, (state, action) => {
            state.isLoading = false
            state.comments = action.payload
        })
        .addCase(getCommentFromBook.rejected, (state, action) => {
            state.isLoading = false
            state.error = "ERRORE"
        })
    }
})

export const commentsLoading = (state) => state.commentsSlice.isLoading
export const commentsError = (state) => state.commentsSlice.error
export const arrayOfComments = (state) => state.commentsSlice.comments
export default commentsFromBookSlice.reducer