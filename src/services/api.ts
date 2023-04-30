import { IUser } from "../states/recoilState";
import { v4 as uuidv4 } from "uuid";
import { calendars, tasks, users } from "./apiMockData";
import { ICalendar, ITask } from "../components/Calendar";

// Mock data for users and calendars
const usersFromMock = users;
const calendarsMocked = calendars;
const tasksMocked = tasks;

export const fetchUsers = async (): Promise<IUser[]> => {
  return usersFromMock;
};

export const fetchCalendars = async (): Promise<ICalendar[]> => {
  return calendarsMocked;
};

export const fetchTasks = async (): Promise<ITask[]> => {
    return tasksMocked;
  };

export const createUser = async (username: string): Promise<IUser> => {
  const newUser: IUser = { id: uuidv4(), name: username };
  usersFromMock.push(newUser);
  return newUser;
};

export const createCalendar = async (name: string, owner: string): Promise<ICalendar> => {
  const newCalendar: ICalendar = { id: uuidv4(), name, tasks: [], owner, permissions: [] };
  calendarsMocked.push(newCalendar);
  return newCalendar;
};

export const createTask = async (calendarId: string, task: Omit<ITask, 'id'>): Promise<ITask> => {
  const newTask: ITask = { id: uuidv4(), ...task };
  const calendar = calendarsMocked.find((cal) => cal.id === calendarId);
  if (calendar) {
    calendar.tasks.push(newTask);
  }
  return newTask;
};

// Add more API functions to manage and update tasks, calendars, and user permissions.
