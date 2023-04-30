import React, { FC } from 'react';
import { TaskWrapper } from './Task.styled';
import { IUserPermission } from '../../UserManagement/UserPermission';
import { ICalendar } from '../Calendar';

/**  Type guard for ITask */
export function isTask(item: ICalendar | ITask): item is ITask {
   return (item as ITask).description !== undefined;
 }
 

 
/**
 * TODO: ? add calendarId to ITask
 */
export interface ITask {
   id: string;
   title: string;   
   description: string;
   startTime: string;
   endTime: string;
   owner: string; // User ID
   // participants: string[]; // Array of User IDs
   /**
    * the owner of the calendar has all permissions, and don't need to be added to the permissions array
    */
   permissions: IUserPermission[];
 }

interface TaskProps {}

const Task: FC<TaskProps> = () => (
 <TaskWrapper>
    Task Component
 </TaskWrapper>
);

export default Task;
