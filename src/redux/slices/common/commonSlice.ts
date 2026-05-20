import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CommonState = {
  initialized: boolean;
};

const initialState: CommonState = {
  initialized: true,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setInitialized(state, action: PayloadAction<boolean>) {
      state.initialized = action.payload;
    },
  },
});

export const { setInitialized } = commonSlice.actions;
export const commonReducer = commonSlice.reducer;
