import { FC } from 'react';
import { TaskWrapper } from './Task.styled';
import { IUserPermission } from '../../types';
import { ICalendar } from '../Calendar';



interface TaskProps {}

const Task: FC<TaskProps> = () => (
 <TaskWrapper>
    Task Component
 </TaskWrapper>
);

export default Task;


/**  Type guard for ITask 
 * Todo: remove
*/
export function isTask(item: ICalendar | ITask): item is ITask {
   //return  (item as ITask).isTask;
   return  (item as ITask).description !== undefined;
 }
 

 
/**
 * TODO: ? add calendarId to ITask
 */
export interface ITask {
   isTask: boolean;
   id: string;
   title: string;   
   description: string;
   startTime: string;
   endTime: string;
   ownerId: string; // User ID
   // participants: string[]; // Array of User IDs
   /**
    * the owner of the calendar has all permissions, and don't need to be added to the permissions array
    */
   permissions: IUserPermission[];
 }

 export class TaskClass implements ITask {
   constructor(
   id: string,
    title: string,
    description: string,
    startTime: string,
    endTime: string,
    owner: string,
    permissions: IUserPermission[]
   ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.startTime = startTime;
      this.endTime = endTime;
      this.ownerId = owner;
      this.permissions = permissions;      
   }
    isTask: boolean = true;
    id: string;
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    ownerId: string;
    permissions: IUserPermission[];
 }