import { createSlice } from "@reduxjs/toolkit";

const init={
    count:0
}

const counterSlice=createSlice({
    name:'counter',
    initialState:init,
    reducers:{
        increment: function(state){
            state.count=state.count+1;
        },
        decrement: function(state){
            state.count=state.count-1;
        },
        inc: function(state,action){
            state.count=state.count+action.payload;
        }
    }
})

export const {inc,increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;
