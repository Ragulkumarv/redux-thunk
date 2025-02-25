import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const URL = await fetch("https://jsonplaceholder.typicode.com/users");
  return URL.json();
});

export const userSlice = createSlice({
  name: "users",
  initialState: { users: [], loading: false, error: false },
  extraReducers: (builder) => {
    //since above api call is returned as promise , access based on the promise states
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer; //Export the reducer so it can be used in the store
