import { configureStore, type ThunkAction, type UnknownAction } from "@reduxjs/toolkit";
import { authReducer } from "@/redux/slices/auth/authSlice";
import { commonReducer } from "@/redux/slices/common/commonSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    common: commonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;
