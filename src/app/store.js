import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/UserAuth/userSlice';
import stackdataReducer from '../features/Questions/questionSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    stackdata: stackdataReducer,
  },
});
