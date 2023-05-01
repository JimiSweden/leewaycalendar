/* eslint-disable */
//import CalendarPermissionManagement from './CalendarPermissionManagement';

import { RecoilRoot, useRecoilState } from "recoil";
import { calendars, users as mockedUsers} from "../../../states/apiMockData";
import PermissionManagement from "./PermissionManagement";
import { usersState } from "../../../states/recoilState";

export default {
  title: "CalendarPermissionManagement",
};


const calendarMocked = calendars[0];
const [users, setUsers] = useRecoilState(usersState);
setUsers(mockedUsers);

export const Default = () =>
<RecoilRoot>
 <PermissionManagement item={calendarMocked} />;
 </RecoilRoot>
Default.story = {
  name: 'default',
};
