import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICalendar } from "../../components/Calendar";

const initialState: ICalendar[] = [];

const calendarsSlice = createSlice({
  name: "calendars",
  initialState,
  reducers: {
    setCalendars: (state, action) => {
      return action.payload;
    },
    /**
     * @example
     * const dispatch = useDispatch<AppDispatch>();
     * const handleAddCalendar = (newCalendar: ICalendar) => {
     *  dispatch(addCalendar(newCalendar));
     * }; 
     */
    addCalendar: (state, action: PayloadAction<ICalendar>) => {
        state.push(action.payload);
      },
    /**
     * @example
     * const dispatch = useDispatch<AppDispatch>(); 
     * const handleUpdateCalendar = (updatedCalendar: ICalendar) => {
     *  dispatch(updateCalendar(updatedCalendar));
     * };
     */
    updateCalendar: (state, action: PayloadAction<ICalendar>) => {
      const updatedCalendar = action.payload;
      const calendarIndex = state.findIndex((calendar) => calendar.id === updatedCalendar.id);
      
      if (calendarIndex !== -1) {
        state[calendarIndex] = updatedCalendar;
      }
    },
    /**
     * @example
     *  const dispatch = useDispatch<AppDispatch>(); 
     *  const handleRemoveCalendar = (calendarId: string) => {
     *       dispatch(removeCalendar(calendarId));
     *  };
    */
    removeCalendar: (state, action: PayloadAction<string>) => {
        const calendarId = action.payload;
        return state.filter((calendar) => calendar.id !== calendarId);
      },

  },
});

export const { setCalendars, updateCalendar, addCalendar, removeCalendar } = calendarsSlice.actions;

export default calendarsSlice.reducer;
