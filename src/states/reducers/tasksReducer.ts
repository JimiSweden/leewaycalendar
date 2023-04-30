import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../components/Calendar";


const initialState: ITask[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      return action.payload;
    },
    //TODO: add, update, remove
     /**
     * @example
     * const dispatch = useDispatch<AppDispatch>();
     * const handleAddTask = (newTask: ITask) => {
     *  dispatch(addTask(newTask));
     * }; 
     */
     addTask: (state, action: PayloadAction<ITask>) => {
        state.push(action.payload);
      },
    /**
     * @example
     * const dispatch = useDispatch<AppDispatch>(); 
     * const handleUpdateTask = (updatedTask: ITask) => {
     *  dispatch(updateTask(updatedTask));
     * };
     */
    updateTask: (state, action: PayloadAction<ITask>) => {
      const updatedTask = action.payload;
      const taskIndex = state.findIndex((task) => task.id === updatedTask.id);
      
      if (taskIndex !== -1) {
        state[taskIndex] = updatedTask;
      }
    },
    /**
     * @example
     *  const dispatch = useDispatch<AppDispatch>(); 
     *  const handleRemoveTask = (taskId: string) => {
     *       dispatch(removeTask(taskId));
     *  };
    */
    removeTask: (state, action: PayloadAction<string>) => {
        const taskId = action.payload;
        return state.filter((task) => task.id !== taskId);
      },
  },
});

export const { setTasks, addTask, updateTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
