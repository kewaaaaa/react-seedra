import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const DATA__URL = 'https://rgergerretwe.herokuapp.com/productRequests'
const initialState = {
    feedbacks: [],
    status:'idle',
}
const name = 'feedbacks'

export const getAsyncFeedbacks = createAsyncThunk(
    'feedbacks/getFeedbacks',
    async function(_, {rejectWithValue} ) {
        try {
            const res = await fetch(DATA__URL)
            if(!res.ok) {
                throw new Error('Server error: ', res.status)
            }
            const data = await res.json()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
    )
    export const addFeedback = createAsyncThunk(
        'feedbacks/addFeedback',
        async function(feedback, {rejectWithValue} ) {
            
            try {
                const res = await fetch(DATA__URL,{
                    method: 'POST',
                    headers: {
                          'Content-type' : 'application/json'
                        },
                        body: JSON.stringify(
                              feedback
                            )
                          })
                if(!res.ok) {
                    throw new Error('Server error: ', res.status)
                }
            } catch (error) {
                return rejectWithValue(error)
            }
        }
        )

const feedbacksSlice = createSlice({
    name,
    initialState,
    reducers: {
        getPosts (state) {
            return state.feedbacks
        },
        createFeedback(state, action) {
            state.feedbacks.push(action.payload)
        }
    },
    extraReducers:{
        [getAsyncFeedbacks.rejected]: (state, action) => {
            state.status = 'error'
        },
        [getAsyncFeedbacks.pending]: (state, action) => {
            state.status = "loading"
        },
        [getAsyncFeedbacks.fulfilled]: (state, action) => {
            state.status = "success"
            state.feedbacks = action.payload
        },
    }
})


export const { getPosts, createFeedback } = feedbacksSlice.actions
export default feedbacksSlice.reducer