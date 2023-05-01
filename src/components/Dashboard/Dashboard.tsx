import React from 'react';
import { IUser, ICalendar, ITask } from '../types';

import {
    Title,
    List,
    ListItem,
    EnvironmentMessage,
    DashboardWrapper,
} from './Dashboard.styled';

import TaskList from './TaskList/TaskList';
import CalendarList from './CalendarList/CalendarList';

interface DashboardProps {
    user: IUser;
    calendars: ICalendar[];
    tasks: ITask[];
}

const onOpenCalendar = (calendarId: string) =>
    console.log('Calendar > onOpenCalendar', calendarId);
const onShareCalendar = (calendarId: string) =>
    console.log('Calendar > onShareCalendar', calendarId);

const Dashboard: React.FC<DashboardProps> = ({ user, calendars, tasks }) => {
   
    const calendarsUserOwns = calendars.filter(calendar => calendar.ownerId === user.id);

    const calendarsUserHasPermissionTo = calendars.filter(calendar =>
        calendar.permissions.some(permission => permission.userId === user.id)        
    );
    
    // const tasksUserOwns = tasks.filter(task => task.ownerId == user.id);
    

    const tasksUserHasPermissionTo = tasks.filter(task =>
        task.permissions.map(p => p.userId).includes(user.id)
    );
    return (
        <DashboardWrapper>
            <EnvironmentMessage>
                You are running this application in{' '}
                <b>{process.env.NODE_ENV}</b> mode.
                <div>SHOW_RECOIL_DEBUGGER : {process.env.REACT_APP_SHOW_RECOIL_DEBUGGER}</div>
            </EnvironmentMessage>
            <Title>Your Calendars</Title>
            <List>
                {calendarsUserOwns.map(calendar => (
                    <ListItem key={calendar.id}>{calendar.name}</ListItem>
                ))}
            </List>
            {/* TODO ? : pass userId and let CalendarList fetch calendars - from recoilState*/}
            <CalendarList
                calendars={calendarsUserHasPermissionTo}
                onOpenCalendar={onOpenCalendar}
                onShareCalendar={onShareCalendar}
            ></CalendarList>
            <TaskList
                tasks={tasksUserHasPermissionTo}
            ></TaskList>
        </DashboardWrapper>
    );
};

export default Dashboard;
