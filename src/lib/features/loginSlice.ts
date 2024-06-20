import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface IState {
    auth: {currentUser:string,token:string};
    loading:boolean;
    error:boolean;
}
const initialState:IState = {
auth:{currentUser:"user123",token:"tokern123"},
loading:false,
error:false
}



const loginSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        fetchAuthStart : state=> {
            state.loading = true;
            state.error = false;
        },
        fetchAuthFailEnd :  state => {
            state.loading = false;
            state.error = true;
        },
        fetchAuthSuccessLogin : (state,action: PayloadAction<{currentUser:string,token:string}>) =>{
            state.loading = false;
            state.auth = action.payload;
        },


        // action: PayloadAction<Page[]
    }
})



export const  {fetchAuthStart,fetchAuthFailEnd,fetchAuthSuccessLogin} = loginSlice.actions;
export default loginSlice.reducer;