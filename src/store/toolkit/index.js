import { configureStore } from '@reduxjs/toolkit';

// 中间件
import logger from 'redux-logger';

// reducer
import sessionReducer from './features/sessionSlice.js';
import userReducer from './features/userSlice.js';

export default configureStore({
  reducer: {
    session: sessionReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
    }).concat(logger),
});
