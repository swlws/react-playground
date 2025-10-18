import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './features/sessionSlice.js';

export default configureStore({
  reducer: {
    session: sessionReducer,
  },
});
