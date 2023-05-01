import { atom } from "recoil";
import { IUser, ICalendar, ITask } from "../components/types";



/** all users available to select for the current user */
export const usersState = atom<IUser[]>({
  key: "usersState",
  default: [],
});

/** all calendars available to select for the current user */
export const calendarsState = atom<ICalendar[]>({
  key: "calendarsState",
  default: [],
});

/** all tasks available to select for the current user */
export const tasksState = atom<ITask[]>({
    key: 'tasks',
    default: [],
  });
  

export const tasksWherePermissionIsBeingManaged = atom<ITask[]>({
  key: 'tasksBeingManaged',
  default: [],
});
export const calendarsWherePermissionIsBeingManaged = atom<ICalendar[]>({
  key: 'calendarsBeingManaged',
  default: [],
});
