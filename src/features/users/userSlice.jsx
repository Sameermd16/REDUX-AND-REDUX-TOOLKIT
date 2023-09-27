import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    return data  
})

console.log(fetchUsers)

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state ) => {
            state.loading = true 
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log(action)
            state.loading = false 
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log(action)
            state.loading = false 
            state.error = action.error.message 
        })
    }
})

export default userSlice.reducer