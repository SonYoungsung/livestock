import { configureStore, createSlice } from "@reduxjs/toolkit";

const authStore = createSlice({
  name: "user",
  initialState: { uid: undefined, name: undefined },
  reducers: {
    getUserId: (state, action) => {
      state.uid = action.payload;
    },
    getName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { getUserId } = authStore.actions;

export default configureStore({
  reducer: {
    user: authStore.reducer,
  },
});
