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
} from './Dashboard.styled';
import { IUser, tasksWherePermissionIsBeingManaged } from '../../states/recoilState';
import TaskList from './TaskList/TaskList';
import CalendarList from './CalendarList/CalendarList';
import PermissionManagement from '../Calendar/PermissionManagement/Calendar/PermissionManagement';
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

  const [managedTasks] = useRecoilState(tasksWherePermissionIsBeingManaged);

    

    return (
        <DashboardWrapper>
            <EnvironmentMessage>
                You are running this application in{' '}
                <b>{process.env.NODE_ENV}</b> mode.
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
            <Title>Your Tasks</Title>
            {/* <List>
                {userTasks.map(task => (
                    <ListItem key={task.id}>
                     {task.title}
                     </ListItem>
                ))}
            </List> */}

            {/* TODO ? : pass userId and let TaskList fetch tasks - from recoilState*/}
            <TaskList
                tasks={userTasks}
               
            ></TaskList>
            <PermissionManagementWrapper>
               {managedTasks.map((task) => (
                  <PermissionManagement key={task.id} item={task} users={[]} />
               ))}
               </PermissionManagementWrapper>

            {/* {showPermissionManagement && <PermissionManagement item={undefined} users={[]} />} */}
        </DashboardWrapper>
    );
};

export default Dashboard;
