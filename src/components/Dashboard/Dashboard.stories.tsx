/* eslint-disable */
// import Dashboard from './Dashboard';
import { calendars, users } from "../../states/apiMockData";

import Dashboard from "./Dashboard";

export default {
  title: "Dashboard",
};

const Anna = users[0];
const calendarsMocked = calendars.find((calendar) => calendar.ownerId === Anna.id);
export const Default = () => <Dashboard user={Anna} calendars={[]} tasks={[]} />;

Default.story = {
  name: 'default',
};
