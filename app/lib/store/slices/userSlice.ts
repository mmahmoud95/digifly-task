import { User } from "@/app/components/Header/ResultUsers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: "users",
  initialState: { entities: [] as User[] },
  reducers: {
    addUser: function (state, action: PayloadAction<User>) {
      state.entities.push(action.payload);
    },

    removeUser: function (state, action) {
      const index = state.entities.findIndex(
        (user: User) => user.id === action.payload,
      );
      if (index >= 0) {
        state.entities.splice(index, 1);
      }
    },

    loadUsers: function (state, action: PayloadAction<User[]>) {
      state.entities = action.payload;
    },
  },
});
// Later, dispatch the action as needed in the app
export const { addUser, loadUsers, removeUser } = usersSlice.actions;

// The function below is called a selector and allows us to select a value from
export default usersSlice.reducer;
