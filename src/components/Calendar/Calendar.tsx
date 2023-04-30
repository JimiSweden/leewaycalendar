import React, { FC } from 'react';
import { CalendarWrapper } from './Calendar.styled';
import { ITask } from './Task/Task';
import { IUserPermission } from '../UserManagement/UserPermission';

/** Type guard for ICalendar */
export function isCalendar(item: ICalendar | ITask): item is ICalendar {
   return (item as ICalendar).name !== undefined;
 }
 
 
export interface ICalendar {
   id: string;
   name: string;
   tasks: ITask[];
   owner: string; // User ID
 
   //todo ?: replace with UserPermission[] and participants: string[]
   // sharedUsers: {
   //   id: string;
   //   role: "viewer" | "contributor" | "administrator";
   // }[];
   
 //   participants: string[];
   permissions: IUserPermission[];
 }

 
interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => (
 <CalendarWrapper>
    Calendar Component
 </CalendarWrapper>
);

export default Calendar;
