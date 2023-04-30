/* eslint-disable */
//import CalendarPermissionManagement from './CalendarPermissionManagement';

import { calendars, users } from "../../../../services/apiMockData";
import PermissionManagement from "./PermissionManagement";

export default {
  title: "CalendarPermissionManagement",
};

const usersMocked = users;
const calendarMocked = calendars[0];

export const Default = () => <PermissionManagement item={calendarMocked} users={usersMocked} />;

Default.story = {
  name: 'default',
};
