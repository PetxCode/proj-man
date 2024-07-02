import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reference: "",
};

const global = createSlice({
  name: "second",
  initialState,
  reducers: {
    changeRef: (state: any, { payload }: any) => {
      state.reference = payload;
    },
  },
});

export const { changeRef } = global.actions;

export default global.reducer;
