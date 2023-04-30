/* eslint-disable */

import CalendarList from "./CalendarList";

export default {
  title: "DashboardCalendarList",
};

const onOpenCalendar = (calendarId: string) => console.log('onOpenCalendar', calendarId);
const onShareCalendar = (calendarId: string) => console.log('onShareCalendar', calendarId);

export const Default = () => <CalendarList calendars={[]} 
onOpenCalendar={onOpenCalendar} onShareCalendar={onShareCalendar} />;

Default.story = {
  name: 'default',
};
