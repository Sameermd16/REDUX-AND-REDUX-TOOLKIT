import { createSlice } from '@reduxjs/toolkit'

 
 const initialState = {
    numOfCakes: 10
 }

 //createslice is creating the actions by itself with the same name as reducer function 
 const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes = state.numOfCakes - 1
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
 }) 

 console.log(cakeSlice)

 //export reducer as default -> module.exports = cakeSlice.reducer 
 //export actions as named exports -> module.exports.cakeActions = cakeSlice.actions 
 export default cakeSlice.reducer 
 export const { ordered, restocked } = cakeSlice.actions 