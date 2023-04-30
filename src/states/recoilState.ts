import { atom } from "recoil";
import { ICalendar, ITask } from "../components/Calendar";

export interface IUser {
  id: string;
  name: string;
}

export const usersState = atom<IUser[]>({
  key: "usersState",
  default: [],
});

export const calendarState = atom<ICalendar[]>({
  key: "calendarState",
  default: [],
});

export const tasksWherePermissionIsBeingManaged = atom<ITask[]>({
  key: 'tasksBeingManaged',
  default: [],
});
