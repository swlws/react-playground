import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    token: null,
    isDarkMode: false,
  },
  reducers: {
    setToken: (state, action) => {
      console.log('setToken', action.payload);
      state.token = action.payload;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

// reducer
export default sessionSlice.reducer;

// dispatch 使用的 action
export const { setToken, toggleDarkMode } = sessionSlice.actions;

// selector 使用的读取状态的函数
export const selectIsDarkMode = (state) => state.session.isDarkMode;
export const selectToken = (state) => state.session.token;
