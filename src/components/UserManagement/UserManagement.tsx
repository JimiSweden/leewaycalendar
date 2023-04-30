import React, { FC } from 'react';
import { UserManagementWrapper } from './UserManagement.styled';
import { UserRole } from './UserPermission';
import { ICalendar, ITask } from '../Calendar';
import { IUser } from '../../states/recoilState';


interface UserManagementProps {}

const UserManagement: FC<UserManagementProps> = () => (
    <UserManagementWrapper>UserManagement Component</UserManagementWrapper>
);

export default UserManagement;
const BaseUrl = process.env.APP_BASE_URL;

/** share a calendar or task using a UUID */
export function share(item: ICalendar | ITask): string {
  return `${BaseUrl}/${item.id}`;
}

 /** Update user permissions for a calendar or task 
  * TODO : consolidate in permissionService ? 
 */
export function updateUserPermissions(
  item: ICalendar | ITask,
  user: IUser,
  newRole: UserRole
): void {
  let existingPermission = item.permissions.find((perm) => perm.userId === user.id);

  
  if (existingPermission) {
   //remove existing permission from array
   item.permissions = item.permissions.filter((perm) => perm.userId !== user.id);
   item.permissions.push({ ...existingPermission, role: newRole });
   //  existingPermission.role = newRole;
  } else {
    item.permissions.push({ userId: user.id, userName:user.name, role: newRole });
  }
}
