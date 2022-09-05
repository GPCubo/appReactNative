import { createSlice } from '@reduxjs/toolkit'

const initialValues = {
    photoURI:undefined,
    isAuth:-1,
    updated_at:null,
    created_at:null,
    email:null,
    name:null
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: initialValues,
  },
  reducers: {
    updateUser: (state, action) => {
        state.value = {...state.value,...action.payload}
    },
    resetUser: (state)=>{
        state.value = initialValues
    }
  },
})

export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer