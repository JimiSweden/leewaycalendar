// Dashboard.tsx
import React from 'react';
import { ICalendar } from '../Calendar';
import { ITask } from '../Calendar';

import { DashboardContainer, Title, List, ListItem, EnvironmentMessage } from './Dashboard.styled';
import { IUser } from '../../states/recoilState';

interface DashboardProps {
    user: IUser;
    calendars: ICalendar[];
    tasks: ITask[];
}

const Dashboard: React.FC<DashboardProps> = ({ user, calendars, tasks }) => {
    const userCalendars = calendars.filter(calendar =>
        calendar.permissions.some(permission => permission.userId === user.id)
    );
    const userTasks = tasks.filter(task => task.permissions.map(p => p.userId).includes(user.id));

    return (
        <DashboardContainer>
         <EnvironmentMessage>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</EnvironmentMessage>
            <Title>Your Calendars</Title>
            <List>
                {userCalendars.map(calendar => (
                    <ListItem key={calendar.id}>{calendar.name}</ListItem>
                ))}
            </List>
            <Title>Your Tasks</Title>
            <List>
                {userTasks.map(task => (
                    <ListItem key={task.id}>{task.title}</ListItem>
                ))}
            </List>
        </DashboardContainer>
    );
};

export default Dashboard;
