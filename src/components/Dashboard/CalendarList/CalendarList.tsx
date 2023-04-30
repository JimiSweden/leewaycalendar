import React, { FC } from 'react';
import { ICalendar } from '../../Calendar';
import { CalendarListWrapper, CalendarListItem } from './CalendarList.styled';

interface CalendarListProps {
  calendars: ICalendar[];
}

const CalendarList: FC<CalendarListProps> = ({ calendars }) => {
  return (
    <CalendarListWrapper>
      <h2>Calendars</h2>
      <ul>
        {calendars.map((calendar) => (
          <CalendarListItem key={calendar.id}>{calendar.name}</CalendarListItem>
        ))}
      </ul>
    </CalendarListWrapper>
  );
};

export default CalendarList;
