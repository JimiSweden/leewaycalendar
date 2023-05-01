// Dashboard.tsx
import React, { useState } from 'react';
import { ICalendar } from '../Calendar';
import { ITask } from '../Calendar';

import {
    DashboardContainer,
    Title,
    List,
    ListItem,
    EnvironmentMessage,
    DashboardWrapper,
    PermissionManagementWrapper,
    TasksAndPermissionManagementWrapper,
} from './Dashboard.styled';
import { IUser, tasksWherePermissionIsBeingManaged } from '../../states/recoilState';
import TaskList from './TaskList/TaskList';
import CalendarList from './CalendarList/CalendarList';
import PermissionManagement from '../Calendar/PermissionManagement/PermissionManagement';
import { useRecoilState, useRecoilValue } from 'recoil';

interface DashboardProps {
    user: IUser;
    calendars: ICalendar[];
    tasks: ITask[];
}
const onShowInCalendar = (taskId: string) => 
   console.log('Task > onShowInCalendar', taskId);
const onInviteUsers = (taskId: string) => 
   console.log('Task > onInviteUsers', taskId);

const onOpenCalendar = (calendarId: string) =>
    console.log('Calendar > onOpenCalendar', calendarId);
const onShareCalendar = (calendarId: string) =>
    console.log('Calendar > onShareCalendar', calendarId);

const Dashboard: React.FC<DashboardProps> = ({ user, calendars, tasks }) => {
    
   const userCalendars = calendars.filter(calendar =>
        calendar.permissions.some(permission => permission.userId === user.id)
    );
    
    const userTasks = tasks.filter(task =>
        task.permissions.map(p => p.userId).includes(user.id)
    );

   //  const [showPermissionManagement, setShowPermissionManagement] = useState(false);
   //  const onInviteUsers = () => {
   //    setShowPermissionManagement(!showPermissionManagement);
   //  };

//   const [managedTasks] = useRecoilState(tasksWherePermissionIsBeingManaged);
//   let managedTasksOrdered = managedTasks?.slice().sort((a, b) => a.title.localeCompare(b.title));
    

    return (
        <DashboardWrapper>
            <EnvironmentMessage>
                You are running this application in{' '}
                <b>{process.env.NODE_ENV}</b> mode.
                <div>SHOW_RECOIL_DEBUGGER : {process.env.REACT_APP_SHOW_RECOIL_DEBUGGER}</div>
            </EnvironmentMessage>
            <Title>Your Calendars</Title>
            <List>
                {userCalendars.map(calendar => (
                    <ListItem key={calendar.id}>{calendar.name}</ListItem>
                ))}
            </List>
            {/* TODO ? : pass userId and let CalendarList fetch calendars - from recoilState*/}
            <CalendarList
                calendars={userCalendars}
                onOpenCalendar={onOpenCalendar}
                onShareCalendar={onShareCalendar}
            ></CalendarList>

            {/* <TasksAndPermissionManagementWrapper> */}
            <TaskList
                tasks={userTasks}
            ></TaskList>
            {/* <PermissionManagementWrapper>
               {managedTasksOrdered.map((task) => (
                  <PermissionManagement key={task.id} item={task} />
               ))}
               </PermissionManagementWrapper> */}
            {/* </TasksAndPermissionManagementWrapper> */}
        </DashboardWrapper>
    );
};

export default Dashboard;
