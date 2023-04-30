import React, { FC } from 'react';
import { ICalendar } from '../../Calendar';
import { 
   CalendarListWrapper, CalendarListItem , List, 
   ButtonGroup, Button
} 
from './CalendarList.styled';

interface CalendarListProps {
   calendars: ICalendar[];
   onOpenCalendar: (calendarId: string) => void;
   onShareCalendar: (calendarId: string) => void;
 }

 const CalendarList: FC<CalendarListProps> = ({ calendars, onOpenCalendar, onShareCalendar }) => {
  return (
    <CalendarListWrapper>
      <h2>Calendars</h2>
      <List>
      {calendars.map((calendar) => (
          <CalendarListItem key={calendar.id}>
            {calendar.name}
            <ButtonGroup>
              <Button onClick={() => onOpenCalendar(calendar.id)}>Open</Button>
              <Button onClick={() => onShareCalendar(calendar.id)}>Share</Button>
            </ButtonGroup>
            <ul>
               {/* TODO: user name from UserPermission 
               - and perhaps a userPersmission component to reuse*/}
              {calendar.permissions.map((permission) => (
                <li key={`${calendar.id}-${permission.userId}`}>
                  {permission.userId} - {permission.role}
                </li>
              ))}
            </ul>
          </CalendarListItem>
        ))}
      </List>
    </CalendarListWrapper>
  );
};

export default CalendarList;
