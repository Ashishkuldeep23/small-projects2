
import { createAction, createSlice , current } from "@reduxjs/toolkit"


const initialState = { amount: 0 }



const amountSlice = createSlice({

    name: "account",
    initialState,
    reducers: {

        increment(state) {
            state.amount++
        },

        decrement(state) {
            state.amount--
        },

        incrementByNumber(state, actions) {
            // if (!num) { return alert("Given number by input") }
            state.amount += actions.payload.newValue
        },

    },

    // extraReducers: (builder) => {
    //     builder

    //         .addCase("bonus/increment", (state, action) => {

    //             // console.log(action.payload)

    //             console.log(current(state))

    //             state.amount += 1

    //         })
    // }


})


export const { increment, decrement, incrementByNumber } = amountSlice.actions


export default amountSlice.reducer






