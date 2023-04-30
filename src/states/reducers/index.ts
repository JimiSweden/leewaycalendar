import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./usersReducer";
import calendarsReducer from "./calendarsReducer";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  calendars: calendarsReducer,
  tasks: tasksReducer,
});

export default rootReducer;
