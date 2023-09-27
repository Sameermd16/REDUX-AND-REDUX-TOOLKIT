import { createSlice } from "@reduxjs/toolkit";
import { ordered } from "../cake/cakeSlice";


const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordersPlaced: (state) => {
            state.numOfIcecreams = state.numOfIcecreams - 1
        }
    },
    //1 icecream free for every cake ordered 
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecreams--
    //     }
    // }
    //recommended way for extrareducers is by build method 
    extraReducers: (builder) => {
        builder.addCase(ordered, (state) => {
            state.numOfIcecreams--
        })
    }
})

export default icecreamSlice.reducer
export const { ordersPlaced } = icecreamSlice.actions 