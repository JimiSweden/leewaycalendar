import { FC } from 'react';
import { CalendarWrapper } from './Calendar.styled';
import { IUserPermission, ITask } from '../types';

/** Type guard for ICalendar */
export function isCalendar(item: ICalendar | ITask): item is ICalendar {
   return (item as ICalendar).name !== undefined;
 } 
 
export interface ICalendar {
   isCalendar: boolean;
   id: string;
   name: string;
   tasks: ITask[];
   ownerId: string; // User ID
 
   //todo ?: replace with UserPermission[] and participants: string[]
   // sharedUsers: {
   //   id: string;
   //   role: "viewer" | "contributor" | "administrator";
   // }[];
   
 //   participants: string[];
   permissions: IUserPermission[];
 }

export class CalendarClass implements ICalendar {
    constructor(
      id: string,
      name: string,
      tasks: ITask[],
      ownerId: string,
      permissions: IUserPermission[]
    ) {
      this.id = id;
      this.name = name;
      this.tasks = tasks;
      this.ownerId = ownerId;
      this.permissions = permissions;
    }
    isCalendar: boolean = true;
    id: string;
    name: string;
    tasks: ITask[];
    ownerId: string;
    permissions: IUserPermission[];
  }
 
interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => (
 <CalendarWrapper>
    Calendar Component
 </CalendarWrapper>
);

export default Calendar;
