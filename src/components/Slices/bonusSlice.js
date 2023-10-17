
import { createAction, createSlice } from "@reduxjs/toolkit"

const initialState = { point : 0 } ;



const bonusSice = createSlice({
    name: "bonus",
    initialState,
    reducers:{

        increment(state){

            state.point += 1;

        }, 


        incrementByNumber( state , action ){

            state.point += action.payload

        },

    } 

})


export const { increment , incrementByNumber } = bonusSice.actions



export default bonusSice.reducer

