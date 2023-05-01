import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../components/types";


const initialState: IUser[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
    //TODO: add, update, remove
    /**
     * @example
     * const dispatch = useDispatch<AppDispatch>();
     * const handleAddUser = (newUser: IUser) => {
     *  dispatch(addUser(newUser));
     * }; 
     */
    addUser: (state, action: PayloadAction<IUser>) => {
        state.push(action.payload);
      },
    /**
     * @example
     * const dispatch = useDispatch<AppDispatch>(); 
     * const handleUpdateUser = (updatedUser: IUser) => {
     *  dispatch(updateUser(updatedUser));
     * };
     */
    updateUser: (state, action: PayloadAction<IUser>) => {
      const updatedUser = action.payload;
      const userIndex = state.findIndex((user) => user.id === updatedUser.id);
      
      if (userIndex !== -1) {
        state[userIndex] = updatedUser;
      }
    },
    /**
     * @example
     *  const dispatch = useDispatch<AppDispatch>(); 
     *  const handleRemoveUser = (userId: string) => {
     *       dispatch(removeUser(userId));
     *  };
    */
    removeUser: (state, action: PayloadAction<string>) => {
        const userId = action.payload;
        return state.filter((user) => user.id !== userId);
      },

  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
