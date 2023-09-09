import {createSlice} from "@reduxjs/toolkit";

type UserProfile = {
    firstName: string
    lastName: string
    email: string
    userName: string
}
type UserAccountInitialState = {
    isLoading: boolean,
    myProfile: UserProfile

}

const initialState: UserAccountInitialState = {
    isLoading: false,
    myProfile: {
        firstName: '' ,
        lastName: '',
        email: '',
        userName: ''
    }
}

const userAccountSlice = createSlice({
    name: "userAccount",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        /*builder
            .addCase()*/
    }
})


export const {} = userAccountSlice.actions;
export default userAccountSlice.reducer;