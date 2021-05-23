import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios-observable';
import { Env } from '../../../environment';
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    userList: [{
      id: '',
      userName: '',
    }]
  },
  reducers: {
    getUserList: (state, action) => {
      state.userList = action.payload;
    },
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    removeLastUser: (state) => {
      state.userList.pop();
    },
  },
})

export const { getUserList, addUser, removeLastUser } = userSlice.actions

export default userSlice.reducer;
