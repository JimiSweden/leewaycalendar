import { createSlice } from "@reduxjs/toolkit";
import { ICalendar } from "../interfaces/Calendar";

const initialState: ICalendar[] = [];

const calendarsSlice = createSlice({
  name: "calendars",
  initialState,
  reducers: {
    setCalendars: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCalendars } = calendarsSlice.actions;

export default calendarsSlice.reducer;
