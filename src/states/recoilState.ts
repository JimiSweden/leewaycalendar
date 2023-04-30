import { atom } from "recoil";
import { ICalendar } from "../components/Calendar/Calendar";

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

