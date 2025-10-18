import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 异步 api
import { apiFetchUser } from '@/api/user';

const useSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    info: {
      id: null,
      name: null,
      email: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.info = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

// reducer
export default useSlice.reducer;

// selector
export const selectUserInfo = (state) => state.user.info;
export const selectUserLoading = (state) => state.user.loading;

// dispatch 使用的 action
export const fetchUser = createAsyncThunk('user/fetchUser', apiFetchUser);
